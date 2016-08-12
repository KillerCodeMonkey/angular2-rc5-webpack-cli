import { Routes, RouterModule } from '@angular/router';

import { BookListComponent } from './book-list';
import { BookDetailComponent } from './book-detail';

const appRoutes: Routes = [{
  path: 'books',
  component: BookListComponent
}, {
  path: 'books/:id',
  component: BookDetailComponent
}, {
  path: '',
  redirectTo: '/books',
  pathMatch: 'full'
}];

export const appRouterProviders = [];

export const routing = RouterModule.forRoot(appRoutes);
