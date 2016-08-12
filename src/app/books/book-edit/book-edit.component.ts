import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Book, BookDataService } from '../shared';

function myTitleValidator(c: FormControl) {
  return c.value === "TEST" ? { validateTitle: {valid: false} } : null;
}

@Component({
  selector: 'app-book-edit',
  templateUrl: 'book-edit.component.html',
  styleUrls: ['book-edit.component.css']
})
export class BookEditComponent implements OnInit, OnDestroy {

  private sub: Subscription;
  formGroup: FormGroup;
  book: Book;

  constructor(private route: ActivatedRoute, private bookData: BookDataService, private fb: FormBuilder) { }

  ngOnInit() {
    this.sub = this.route
      .params.subscribe(params => {
        this.bookData.getBookByIsbn(params['isbn']).subscribe(book => {
          this.book = book;
          this.formGroup = this.fb.group({
            'title': [this.book.title, [Validators.required, myTitleValidator]]
          });
        });
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  handleSubmit(values) {
    console.log(values);
  }

}
