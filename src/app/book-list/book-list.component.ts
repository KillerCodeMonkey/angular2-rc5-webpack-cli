import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Book, BookDataService } from '../shared';

@Component({
  selector: 'app-book-list',
  templateUrl: 'book-list.component.html',
  styleUrls: ['book-list.component.css'],
  providers: [BookDataService]
})
export class BookListComponent implements OnInit, OnDestroy {
  @Input('book-title') title: String;
  @Output('book-title-clicked') titleClicked = new EventEmitter<String>();
  books: Book[];
  booksObservable: Observable<Book[]>;
  subscription: Subscription;
  x = 0;
  y = 0;

  constructor(private bookData: BookDataService) {
    this.booksObservable = this.bookData.getBooks();
  }

  ngOnInit() {
    this.subscription = this.bookData.getBooks().subscribe((books: Book[]) => this.books = books);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  mouseMoveHandle({
    clientX,
    clientY
  }: MouseEvent) {
    this.x = clientX;
    this.y = clientY;
  }

  handleClick() {
    this.titleClicked.emit('clicked');
  }
}
