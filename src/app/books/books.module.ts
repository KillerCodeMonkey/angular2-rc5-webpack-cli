import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BookListComponent }    from './book-list';
import { BookDetailComponent }  from './book-detail';

import { routing, GuardFunction } from './books.routing';

import { BookDataService, ShoutPipePipe, Tooltip } from './shared';

@NgModule({
  imports: [
    routing,
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    ShoutPipePipe,
    Tooltip,
    BookListComponent,
    BookDetailComponent
  ],
  providers: [
    BookDataService,
    {provide: 'GuardFunction', useValue: GuardFunction} // CanDeactivateConfirm
  ]
})
export class BooksModule {}