import { Component, Input, Output, EventEmitter, ViewChild, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-searchbox',
  template: `
    <div class="searchbox-container">
      <input type="text" autocomplete="off" [(ngModel)]="query" [placeholder]="placeholder" (keyup)="onInputChange($event)">
    </div>
  `,
  styles: [
    '.searchbox-container { width: 100% }'
  ]
})
export class SearchboxComponent implements OnDestroy {
  @Input() debounceTime = 200;
  @Output() emitter = new EventEmitter<string>();

  query = '';
  placeholder = 'Search for Restaurants by Name, Cuisine, Location...';
  results;

  debouncer = new Subject<string>();
  subs = new Array<Subscription>();

  constructor() {
    this.subs.push(this.debouncer.debounceTime(this.debounceTime).subscribe(
      (value: string) => { this.emitter.emit(value); },
      (error) => { console.log(error); }
    ));
  }

  onInputChange(event: any) {
    this.debouncer.next(event.target.value);
  }

  ngOnDestroy() {
    for (const sub of this.subs) {
      sub.unsubscribe();
    }
  }
}
