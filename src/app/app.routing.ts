import { Routes, RouterModule } from '@angular/router';

import { BookListComponent } from './book-list';
import { BookDetailComponent } from './book-detail';
import { CanDeactivateConfirm } from './shared';

export function GuardFunction() {
  return confirm('verlassen?');
}

const appRoutes: Routes = [{
  path: 'books',
  component: BookListComponent
}, {
  path: 'books/:isbn',
  component: BookDetailComponent,
  canDeactivate: ['GuardFunction']
}, {
  path: '',
  redirectTo: '/books',
  pathMatch: 'full'
}];

export const appRouterProviders = [];

export const routing = RouterModule.forRoot(appRoutes);
