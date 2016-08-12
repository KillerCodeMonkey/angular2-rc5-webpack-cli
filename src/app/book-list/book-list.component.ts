import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: 'book-list.component.html',
  styleUrls: ['book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Input('book-title') title: String;
  @Output('book-title-clicked') titleClicked = new EventEmitter<String>();
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

  handleClick() {
    this.titleClicked.emit('clicked');
  }
}
