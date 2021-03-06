import { Routes, RouterModule } from '@angular/router';
import { BooksListComponent } from './books/list';
import { BookViewComponent } from './books/view';
import { BookEditComponent } from './books/edit';
import { BookNewComponent } from './books/new';
import { BookGetComponent } from './books/get';
import { BookReturnComponent } from './books/return';
import { UsersListComponent } from './users/list';

import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',  component: BooksListComponent },
  { path: 'books',  component: BooksListComponent },
  { path: 'book/new', component: BookNewComponent },
  { path: 'book/view/:id', component: BookViewComponent },
  { path: 'book/edit/:id', component: BookEditComponent },
  { path: 'book/get/:id', component: BookGetComponent },
  { path: 'book/return/:id', component: BookReturnComponent },
  { path: 'users', component: UsersListComponent },

  { path: '**',    component: NoContentComponent },
];
