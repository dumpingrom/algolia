import { Component } from '@angular/core';

import { AlgoliaService } from './algolia.service';

@Component({
  selector: 'app-pager',
  template: `
    <div>Pager</div>
  `
})
export class PagerComponent {

  constructor(public algolia: AlgoliaService) { }
}
