import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PipesModule } from '../pipes/pipes.module';
import { UiModule } from '../ui/ui.module';
import { UsersModule } from '../users/users.module';

import { BookService } from './service';

import { BooksListComponent } from './list';
import { BooksFilterComponent } from './list/filter/filter.component';
import { BooksTableComponent } from './list/table/table.component';
import { BookViewComponent } from './view';
import { BookEditComponent } from './edit';
import { BookNewComponent } from './new';
import { BookGetComponent } from './get';
import { BookReturnComponent } from './return';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        FormsModule,
        PipesModule,
        UiModule,
        UsersModule
    ],
    declarations: [
        BooksListComponent,
        BooksFilterComponent,
        BooksTableComponent,
        BookViewComponent,
        BookEditComponent,
        BookNewComponent,
        BookGetComponent,
        BookReturnComponent
    ],
    providers: [
        BookService
    ],
    bootstrap: []
})

export class BooksModule {}