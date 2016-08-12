import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { appRouterProviders, routing } from './app.routing';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { ShoutPipePipe } from './shared/shout-pipe.pipe';
import { Tooltip } from './shared/tooltip.directive';
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    ShoutPipePipe,
    Tooltip,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRouterProviders],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
