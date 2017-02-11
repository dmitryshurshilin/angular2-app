import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { BookService } from '../service/book.service';

@Component({
    selector: 'book-get', // <book-get></book-get>
    providers: [
        BookService
    ],
    styleUrls: [ './get.component.css' ],
    templateUrl: './get.component.html'
})

export class BookGetComponent {}

