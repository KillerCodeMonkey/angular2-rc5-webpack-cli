import { Routes, RouterModule } from '@angular/router';

import { BookListComponent } from './book-list';

const appRoutes: Routes = [{
  path: '**',
  component: BookListComponent
}];

export const appRouterProviders = [];

export const routing = RouterModule.forRoot(appRoutes);
