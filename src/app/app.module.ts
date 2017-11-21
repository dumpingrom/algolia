import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import {
  AlgoliaService,
  SearchboxComponent,
  RefinementlistComponent,
  ResultsComponent,
  PagerComponent
} from './algolia';
import { Http } from '@angular/http/src/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchboxComponent,
    RefinementlistComponent,
    ResultsComponent,
    PagerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    FormsModule
  ],
  providers: [AlgoliaService],
  bootstrap: [AppComponent],
})
export class AppModule { }
