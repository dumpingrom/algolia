import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AlgoliaService } from './algolia.service';

@Component({
  selector: 'app-refinementlist',
  template: `
    <span class="refinementlist-filter-toggle" (click)="toggleList(!isActive)">Show/Hide Filters</span>
    <div [class]="'app-refinementlist-container' + (isActive ? ' active' : ' inactive')">
      <div *ngFor="let facet of results.facets">
        <h3>{{ facet.name }}</h3>
        <ul>
          <li *ngFor="let data of results.getFacetValues(facet.name)">
            <input type="checkbox" [id]="'data-'+data.name"
              (change)="onCheckboxChange(facet.name, data.name)">
            <label for="data-{{data.name}}">
              <span class="facet-data-name">{{data.name}}</span>
              <span class="facet-data-count">{{ data.count }}</span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  `
})
export class RefinementlistComponent {
  isActive = false;
  results = [];

  subs = new Array<Subscription>();

  constructor(public algolia: AlgoliaService) {
    this.algolia.emitter.subscribe(
      (results) => { this.results = results; },
      (error) => { console.error(error); }
    );
  }

  toggleList() {
    this.isActive = !this.isActive;
  }

  onCheckboxChange(facet, value) {
    this.algolia.toggleFacet(facet, value);
  }
}
