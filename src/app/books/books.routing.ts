import { Routes, RouterModule } from '@angular/router';

import { CanDeactivateConfirm } from './shared';
import { BookListComponent } from './book-list';
import { BookDetailComponent } from './book-detail';

export function GuardFunction() {
  return confirm('verlassen?');
}

const routes: Routes = [{
  path: 'books',
  children: [{
    component: BookListComponent,
    path: ''
  }, {
    path: ':isbn',
    component: BookDetailComponent,
    canDeactivate: ['GuardFunction']
  }, {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  }]
}];

export const routing = RouterModule.forChild(routes);
