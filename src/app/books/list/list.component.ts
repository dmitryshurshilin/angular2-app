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

    filterTitle: string = '';
    filterAuthor: string = '';
    filterGenre: string = '0';
    filterAvailability: string = '0';

    books: Array<Object>;
    loading: Boolean;

    constructor(private bookService: BookService) {}

    ngOnInit() {
        this.loading = true;
        this.bookService.getBooks()
            .subscribe((books) => {
                    this.books = books;
                    this.loading = false;
                }
            );
    }

}
