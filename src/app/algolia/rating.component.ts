import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-rating',
    template: `
    <div class="app-rating-container">
      <span class="app-rating-bottom">
        <img src="/assets/images/stars-empty.png" *ngFor="let i of [0,1,2,3,4]" height="18">
      </span>
      <span class="app-rating-top" [ngStyle]="{'width': parsedScore+'%'}">
        <img src="/assets/images/stars-plain.png" *ngFor="let i of [0,1,2,3,4]" height="18">
      </span>
    </div>
    `,
    styles: [
      `.app-rating-bottom, .app-rating-top {
        position: absolute;
        top: 0; left: 0;
      }
      `,
      `.app-rating-container {
        position : relative;
        top: 2px;
        width: 90px;
        height: 18px;
        display: inline-block;
      }
      `,
      `.app-rating-top {
        z-index: 1;
        overflow: hidden;
        white-space: nowrap;
      }
      `,
      `.app-rating-bottom {
        z-index: 0;
      }
      `,
      `img {
        display: inline-block;
      }
      `
    ]
})
export class RatingComponent implements OnInit {
  @Input() score;
  parsedScore: number;

  constructor() {}

  ngOnInit() {
    this.parsedScore = parseFloat(this.score)*20;
  }
}