import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksFilter } from './filters/books-filter';
import { BooksSort } from './filters/books-sort';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        BooksFilter,
        BooksSort
    ],
    exports: [
        BooksFilter,
        BooksSort
    ],
    providers: [],
    bootstrap: []
})

export class PipesModule {}