import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { BookService } from '../service/book.service';

@Component({
    selector: 'book-return', // <book-return></book-return>
    providers: [
        BookService
    ],
    styleUrls: [ './return.component.css' ],
    templateUrl: './return.component.html'
})

export class BookReturnComponent {}