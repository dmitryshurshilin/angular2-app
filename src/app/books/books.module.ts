import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PipesModule } from '../pipes/pipes.module';

import { BooksListComponent } from './list';
import { BooksTableComponent } from './list/table/table.component';
import { BookViewComponent } from './view';
import { BookEditComponent } from './edit';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        PipesModule
    ],
    declarations: [
        BooksListComponent,
        BooksTableComponent,
        BookViewComponent,
        BookEditComponent
    ],
    providers: [],
    bootstrap: []
})

export class BooksModule {}