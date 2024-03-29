import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AlgoliaService } from './algolia.service';

@Component({
  selector: 'app-refinementlist',
  template: `
    <div [class]="'app-refinementlist-container' + (isActive ? ' active' : ' inactive')">
      <div *ngFor="let facet of results.disjunctiveFacets">
        <h3>{{ prettyNames[facet.name] }}</h3>
        <ul>
          <li *ngFor="let data of results.getFacetValues(facet.name)">
            <input type="checkbox" [id]="'data-'+data.name"
              (change)="onCheckboxChange(facet.name, data.name)">
            <label for="data-{{data.name}}" [class]="'clickable ' + (data.isRefined ? 'refined' : '')">
              <span class="facet-data-name">{{data.name}}</span>
              <span class="facet-data-count">{{ data.count }}</span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  `
})
export class RefinementlistComponent implements OnInit, OnDestroy {
  @Input() isActive;

  results = [];
  prettyNames = {
    'food_type': 'Cuisine/Food Type',
    'stars_count': 'Rating',
    'payment_options': 'Payment Options',
    'city': 'City',
    'price_range': 'Price Range'
  }
  subs = new Array<Subscription>();

  constructor(public algolia: AlgoliaService) {}

  ngOnInit() {
    this.subs.push(this.algolia.emitter.subscribe(
      (results) => { this.results = results; },
      (error) => { console.error(error); }
    ));
  }
  
  onCheckboxChange(facet, value) {
    this.algolia.toggleFacet(facet, value);
  }

  ngOnDestroy() {
    for (let sub of this.subs) {
      sub.unsubscribe();
    }
  }
}
