import { Routes, RouterModule } from '@angular/router';
import { BooksListComponent } from './books/list';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',  component: BooksListComponent },
  { path: 'books',  component: BooksListComponent },
  // { path: 'book/view/:id', component: BookViewComponent },
  // { path: 'book/edit/:id', component: BookEditComponent },
  // { path: 'readers',  component: ReadersListComponent },
  { path: '**',    component: NoContentComponent },
];
