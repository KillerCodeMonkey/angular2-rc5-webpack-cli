import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Book } from '../shared';

@Injectable()
export class BookDataService {

  books: Book[] = [
    {
      'title': 'Design Patterns',
      'subtitle': 'Elements of Reusable Object-Oriented Software',
      'isbn': '978-0-20163-361-0',
      'numPages': 395,
      'author': 'Erich Gamma / Richard Helm / Ralph E. Johnson / John Vlissides',
      'publisher': {
        'name': 'Addison-Wesley',
        'url': 'http://www.addison-wesley.de/'
      }
    },
    {
      'title': 'REST und HTTP',
      'subtitle': 'Entwicklung und Integration nach dem Architekturstil des Web',
      'isbn': '978-3-86490-120-1',
      'numPages': 330,
      'author': 'Stefan Tilkov / Martin Eigenbrodt / Silvia Schreier / Oliver Wolf',
      'publisher': {
        'name': 'dpunkt.verlag',
        'url': 'http://dpunkt.de/'
      }
    },
    {
      'title': 'Eloquent JavaScript',
      'subtitle': 'A Modern Introduction to Programming',
      'isbn': ' 978-1-59327-584-6',
      'numPages': 472,
      'author': 'Marijn Haverbeke',
      'publisher': {
        'name': 'No Starch Press',
        'url': 'https://www.nostarch.com/'
      }
    }
  ]

  constructor(private http: Http) { }

  getBooks(): Observable<Book[]> {
    return this.http
      .get('http://localhost:4730/books', {body: ''})
      .map(response => response.json());
  }

  getBookByIsbn(isbn: string): Observable<Book> {
    return this.http
      .get(`http://localhost:4730/books/${isbn}`, {body: ''})
      .map(response => response.json());
  }
}
