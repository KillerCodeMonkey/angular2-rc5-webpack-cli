import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Book, BookDataService } from '../shared';

@Component({
  selector: 'app-book-detail',
  templateUrl: 'book-detail.component.html',
  styleUrls: ['book-detail.component.css']
})
export class BookDetailComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  book: Book;

  constructor(private route: ActivatedRoute, private bookData: BookDataService) { }

  ngOnInit() {
    this.sub = this.route
      .params.subscribe(params => {
        this.bookData.getBookByIsbn(params['isbn']).subscribe(book => this.book = book);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
