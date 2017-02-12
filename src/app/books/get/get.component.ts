import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { UsersService } from '../../users/service';
import { BookService } from '../service';

@Component({
    selector: 'book-get', // <book-get></book-get>
    providers: [
        BookService
    ],
    styleUrls: [ './get.component.css' ],
    templateUrl: './get.component.html'
})

export class BookGetComponent implements OnInit {

    private sub: any;
    private id: Number;
    private book: Object;
    private users: any[];
    private loading: Boolean;
    private bookTaker: number;

    constructor(private router: Router, private route: ActivatedRoute, private bookService: BookService, private usersService: UsersService) {}

    setBook(book: any): void {
        this.book = book;
        this.setUsers();
        this.loading = false;        
    }

    setUsers(): void {
        this.usersService.getUsers().subscribe(users => this.users = users);
    }

    markAsTaken(book: any): void {
        book.holder = this.bookTaker;
        this.bookService.save(book.id, book).subscribe(res => {
            this.router.navigate(['/book/view/', book.id]);
        });
    }

    ngOnInit() {
        this.loading = true;
        this.sub = this.route.params.subscribe(params => {
            this.bookService.getBook(+params['id'])
                .subscribe(book => this.setBook(book));
        });
    }

}

