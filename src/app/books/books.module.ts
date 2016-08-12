import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BookListComponent }    from './book-list';
import { BookDetailComponent }  from './book-detail';
import { BookEditComponent }  from './book-edit';

import { routing, GuardFunction } from './books.routing';

import { BookDataService, ShoutPipePipe, Tooltip } from './shared';

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
    BookListComponent,
    BookEditComponent,
    BookDetailComponent
  ],
  providers: [
    BookDataService,
    {provide: 'GuardFunction', useValue: GuardFunction} // CanDeactivateConfirm
  ]
})
export class BooksModule {}