import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { UsersService } from '../../users/service';
import { BookService } from '../service';

@Component({
    selector: 'book-return', // <book-return></book-return>
    providers: [
        BookService
    ],
    styleUrls: [ './return.component.css' ],
    templateUrl: './return.component.html'
})

export class BookReturnComponent {

    constructor(private booksService: BookService, private usersService: UsersService) {

    }

}