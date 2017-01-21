import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';

@Component({
    selector: 'books-list',  // <books-list></books-list>
    providers: [
        BookService
    ],
    styleUrls: [ './list.component.css' ],
    templateUrl: './list.component.html'
})
export class BooksListComponent implements OnInit {

    filterParams: any;

    books: Array<Object>;
    loading: Boolean;

    constructor(private bookService: BookService) {
        this.filterParams = {};
        this.filterParams.title = '';
        this.filterParams.author = '';
        this.filterParams.genre = '0';
        this.filterParams.availability = '0';

    }

    ngOnInit() {
        this.loading = true;
        this.bookService.getBooks()
            .subscribe((books) => {
                    this.books = books;
                    this.loading = false;
                }
            );
    }

    filterWasChanged(event) {
        this.filterParams = event;
    }

}
