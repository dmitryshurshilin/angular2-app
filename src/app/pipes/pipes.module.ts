import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksFilter } from './filters/books-filter';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        BooksFilter
    ],
    exports: [
        BooksFilter
    ],
    providers: [],
    bootstrap: []
})

export class PipesModule {}