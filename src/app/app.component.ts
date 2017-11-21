import { Component } from '@angular/core';
import { AlgoliaService } from './algolia/algolia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Algolia Restaurants Search';

  constructor(public algolia: AlgoliaService) { }

  onQueryChange(value: string) {
    this.algolia.search(value);
  }
}
