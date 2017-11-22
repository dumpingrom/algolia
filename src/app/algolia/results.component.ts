import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AlgoliaService } from './algolia.service';

@Component({
  selector: 'app-results',
  template: `
    <span class="clickable refinementlist-filter-toggle" (click)="toggleList()">Show/Hide Filters</span>
    <app-map></app-map>
    <div class="app-results-container">
      <div class="results-nbHits">
        <span><strong>{{ results.nbHits }} results found</strong> in {{ results.processingTimeMS * 0.001 }} seconds</span>
        <div class="separator"></div>
      </div>
      <div *ngFor="let hit of results.hits" class="result">
        <div class="result-image">
          <img [src]="hit.image_url" width="100" height="100">
        </div>
        <div class="result-info">
          <h2 [innerHTML]="hit._highlightResult.name.value"></h2>
          <span class="yellow">{{ hit.stars_count }}</span>
          <app-rating [score]="hit.stars_count"></app-rating>
          <span class="grey">({{ hit.reviews_count }} reviews)</span><br>
          <span class="grey">
            {{ hit._highlightResult.food_type.value }} | {{ hit.neighborhood }} | {{ hit.price_range }}
          </span>
        </div>
      </div>
      <div class="app-pager-container">
        <button (click)="loadMore()">Show More</button>
      </div>
    </div>
  `,
  styles: [
    `.result {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: flex-start;
      justify-content: flex-start;
    }
    `,
    `.result .result-image, .result .result-info {
      padding: 10px;
    }
    `,
    `.results-nbHits {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: flex-end;
      margin-bottom: 20px;
    }
    `,
    `.separator {
      height: 1px;
      background-color: #eee;
      flex-grow: 1;
      margin-left: 10px;
    }
    `,
    `.app-pager-container {
      text-align: center;
    }
    `
  ]
})
export class ResultsComponent implements OnInit, OnDestroy {
  @Output() onToggleRefinementList = new EventEmitter<any>();

  subs = new Array<Subscription>();
  results = [];

  constructor(public algolia: AlgoliaService) {}

  ngOnInit() {
    this.subs.push(this.algolia.emitter.subscribe(
      (results) => { this.results = results; },
      (error) => { console.error(error); }
    ));
  }

  toggleList() {
    this.onToggleRefinementList.emit();
  }

  loadMore() {
    this.algolia.loadMore();
  }

  ngOnDestroy() {
    for (let sub of this.subs) {
      sub.unsubscribe();
    } 
  }
}
