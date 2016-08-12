import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Book, BookDataService } from '../shared';

@Component({
  selector: 'app-book-list',
  templateUrl: 'book-list.component.html',
  styleUrls: ['book-list.component.css'],
  providers: [BookDataService]
})
export class BookListComponent implements OnInit {
  @Input('book-title') title: String;
  @Output('book-title-clicked') titleClicked = new EventEmitter<String>();
  books: Book[];
  x = 0;
  y = 0;

  constructor(private bookData: BookDataService) {
    this.bookData.getBooks().subscribe((books: Book[]) => this.books = books);
  }

  ngOnInit() {
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
