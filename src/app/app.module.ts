import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { appRouterProviders, routing } from './app.routing';
import { AppComponent } from './app.component';
import { BooksModule } from './books';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BooksModule,
    BrowserModule,
    CommonModule,
    routing
  ],
  providers: [appRouterProviders],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
