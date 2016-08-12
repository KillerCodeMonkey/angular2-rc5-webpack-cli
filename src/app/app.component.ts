import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: []
})
export class AppComponent {
  title = 'app works!';
  bookTitle = 'Testitest';

  handleClick(data: String) {
    console.log('Book title clicked:', data);
  }
}
