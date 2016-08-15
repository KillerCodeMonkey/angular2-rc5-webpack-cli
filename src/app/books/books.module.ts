import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpModule, Headers, RequestOptions } from '@angular/http';

import { BookListComponent }    from './book-list';
import { BookDetailComponent }  from './book-detail';
import { BookEditComponent }  from './book-edit';

import { routing, GuardFunction } from './books.routing';

import { BookDataService, ShoutPipePipe, Tooltip } from './shared';

class JsonAsDefaultRequestOptions extends RequestOptions {
    constructor() {
      super({
        headers: new Headers({'Content-Type': 'application/json'})
      });
    }
}

@NgModule({
  imports: [
    routing,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
    ShoutPipePipe,
    Tooltip,
    // Routing components are not needed to declared?!
    BookListComponent,
    BookEditComponent,
    BookDetailComponent
  ],
  providers: [
    BookDataService,
    {provide: RequestOptions, useClass: JsonAsDefaultRequestOptions},
    {provide: 'GuardFunction', useValue: GuardFunction} // CanDeactivateConfirm
  ]
})
export class BooksModule {}
