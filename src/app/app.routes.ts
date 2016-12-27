import { Routes, RouterModule } from '@angular/router';
import { BooksListComponent } from './books/list';
import { BookViewComponent } from './books/view';
import { BookEditComponent } from './books/edit';

import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',  component: BooksListComponent },
  { path: 'books',  component: BooksListComponent },
  { path: 'book/view/:id', component: BookViewComponent },
  { path: 'book/edit/:id', component: BookEditComponent },

  { path: '**',    component: NoContentComponent },
];
