declare const google: any;

import { Component, ViewChild, OnDestroy, AfterViewInit, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AlgoliaService } from './algolia.service';

@Component({
  selector: 'app-map',
  template: `
    <div class="app-map-container">
      <span class="grey clickable" (click)="toggleMap()">⌖ Show results on a map</span>
      <div id="map" #map [class]="isMapVisible ? 'visible' : 'hidden'"></div>
      <span class="mobile-closemap" (click)="toggleMap()">⨯ Close map</span>
    </div>
  `
})
export class MapComponent implements AfterViewInit, OnDestroy {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  markers = [];
  results = [];
  isMapVisible = false;
  subs = new Array<Subscription>();

  constructor(public algolia: AlgoliaService) {}
  
  ngAfterViewInit() {
    this.map = new google.maps.Map(
      this.mapContainer.nativeElement,
      { zoom: 1, center: new google.maps.LatLng(0, 0) }
    );

    this.subs.push(this.algolia.emitter.subscribe(
      (results) => { 
        console.log(results);
        this.results = results;

        this.updateMarkers();
      },
      (error) => { console.error(error); }
    ));
  }

  ngOnDestroy() {
    for (let sub of this.subs) {
      sub.unsubscribe();
    }
  }

  updateMarkers() {
    for (let marker of this.markers) {
      marker.setMap(null);
    }

    for (let hit of this.results['hits']) {

      let marker = new google.maps.Marker({
        position: { lat: hit._geoloc.lat, lng: hit._geoloc.lng },
        map: this.map,
        title: hit.name
      });

      let infowindow = new google.maps.InfoWindow({
        content: `
        <img src="${hit.image_url}" width="50px" height="50px" style="float: left; display: inline-block">
        <div style="display: inline-block; padding: 5px;">
          <span><strong>${hit.name}</strong></span><br>
          <span>${hit.address}, ${hit.city}, ${hit.country}</span><br><br>
        </div>
        <a href="${hit.reserve_url}" target="_blank" title="Find a table at ${hit.name} (new window)" style="clear: both; display: block;">Find a table</a>
        `
      });

      marker.addListener('click', () => {
        infowindow.open(this.map, marker);
      });

      this.markers.push(marker);
    }

    let bounds = new google.maps.LatLngBounds();

    for (let marker of this.markers) {
      bounds.extend(marker.getPosition());
    }

    this.map.fitBounds(bounds);
  }

  toggleMap() {
    this.isMapVisible = !this.isMapVisible;
  }
}