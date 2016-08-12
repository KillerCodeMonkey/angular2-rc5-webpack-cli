import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: 'book-list.component.html',
  styleUrls: ['book-list.component.css']
})
export class BookListComponent implements OnInit {

  x = 0;
  y = 0;

  constructor() { }

  ngOnInit() {
  }

  mouseMoveHandle({
    clientX,
    clientY
  }: MouseEvent) {
    this.x = clientX;
    this.y = clientY;
  }
}
