import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

export class BookReturnComponent implements OnInit {

    private sub: any;
    private id: Number;
    private book: Object;
    private user: Object;
    private loading: Boolean;

    constructor(private router: Router, private route: ActivatedRoute, private bookService: BookService, private usersService: UsersService) {}

    setBook(book: any): void {
        this.book = book;
        if (book.holder !== 0) {
            this.setUser(book.holder);
        }
        this.loading = false;        
    }

    setUser(userId: number): void {
        this.usersService.getUser(userId).subscribe(user => this.user = user);
    }

    markAsReturned(book: any): void {
        book.holder = 0;
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

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}