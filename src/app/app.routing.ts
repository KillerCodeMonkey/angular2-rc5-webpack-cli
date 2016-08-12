import { Routes, RouterModule } from '@angular/router';

import { BookListComponent } from './book-list';
import { BookDetailComponent } from './book-detail';
import { CanDeactivateConfirm } from './shared';

const appRoutes: Routes = [{
  path: 'books',
  component: BookListComponent
}, {
  path: 'books/:isbn',
  component: BookDetailComponent,
  canDeactivate: [CanDeactivateConfirm]
}, {
  path: '',
  redirectTo: '/books',
  pathMatch: 'full'
}];

export const appRouterProviders = [];

export const routing = RouterModule.forRoot(appRoutes);
