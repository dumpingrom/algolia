import { Http } from '@angular/http';

import * as algoliasearch from 'algoliasearch';

class RecordsUpdater {
  constructor(private http: Http) { }

  updateRestaurantsObjects() {
    const client = algoliasearch('7FFYGHIS99', 'a60ba1f30c77303d329b6522221f336a', { protocol: 'https:' });
    const index = client.initIndex('restaurants');

    this.http.get('/assets/restaurants_info.csv').subscribe(
      (data) => {
        const lines = data.text().split('\n');
        const topLine = lines[0].split(';');
        let objects = [];

        for (let i = 1; i < lines.length; i++) {
          const splitLine = lines[i].split(';');
          let obj = {};

          for (let j = 0; j < splitLine.length; j++) {
            obj[topLine[j]] = splitLine[j];
          }

          if (obj['objectID']) { objects.push(obj); }
          console.log(`${i + 1}/${lines.length}...`);
        }

        index.partialUpdateObjects(objects, (error, content) => {
          if (error) { console.error(error); }
          console.log(content);
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
