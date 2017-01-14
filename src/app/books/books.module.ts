import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksListComponent } from './list';
import { BookViewComponent } from './view';
import { BookEditComponent } from './edit';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        BooksListComponent,
        BookViewComponent,
        BookEditComponent
    ],
    providers: [],
    bootstrap: []
})

export class BooksModule {}