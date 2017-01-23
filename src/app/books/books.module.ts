import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PipesModule } from '../pipes/pipes.module';
import { UiModule } from '../ui/ui.module';

import { BooksListComponent } from './list';
import { BooksFilterComponent } from './list/filter/filter.component';
import { BooksTableComponent } from './list/table/table.component';
import { BookViewComponent } from './view';
import { BookEditComponent } from './edit';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        FormsModule,
        PipesModule,
        UiModule
    ],
    declarations: [
        BooksListComponent,
        BooksFilterComponent,
        BooksTableComponent,
        BookViewComponent,
        BookEditComponent
    ],
    providers: [],
    bootstrap: []
})

export class BooksModule {}