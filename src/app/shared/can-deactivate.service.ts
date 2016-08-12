import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { BookDetailComponent } from '../book-detail';

@Injectable()
export class CanDeactivateConfirm implements CanDeactivate<BookDetailComponent> {
  constructor() {}

  canDeactivate(): boolean {
    return confirm('Wirklich verlassen ?');
  }
}
