import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import * as algoliasearch from 'algoliasearch';
import * as algoliasearchHelper from 'algoliasearch-helper';

@Injectable()
export class AlgoliaService {
  client = algoliasearch('7FFYGHIS99', 'a60ba1f30c77303d329b6522221f336a');
  helper = algoliasearchHelper(this.client, 'restaurants', {
    aroundLatLngViaIP: true,
    getRankingInfo: 1,
    hitsPerPage: 3,
    disjunctiveFacets: [ 'food_type' ],
    maxValuesPerFacet: 5
  });

  latitude: any;
  longitude: any;
  useGeolocation = false;

  hits;
  facets;
  emitter = new Subject<any>();

  constructor(private http: Http) {
    navigator.geolocation.getCurrentPosition((pos: Position) => {
      this.latitude = pos.coords.latitude;
      this.longitude = pos.coords.longitude;
      this.useGeolocation = true;
    });

    this.helper.on('result', (results) => {
      this.hits = results.hits;
      this.facets = results.facets;
      this.emitter.next(results);
    });

    // make first search with no query (fetches all results)
    this.search('');
  }

  search(query) {
    this.helper.setQuery(query).search(query);
  }

  toggleFacet(facet, value) {
    this.helper.toggleFacetRefinement(facet, value).search();
  }
}
