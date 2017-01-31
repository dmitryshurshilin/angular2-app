import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';
import { IFilterParams } from '../../interfaces/filter-params.interface';

@Component({
    selector: 'books-list',  // <books-list></books-list>
    providers: [
        BookService
    ],
    styleUrls: [ './list.component.css' ],
    templateUrl: './list.component.html'
})
export class BooksListComponent implements OnInit {

    filterParams: IFilterParams;

    books: Array<Object>;
    loading: Boolean;

    constructor(private bookService: BookService) {

        this.filterParams = {
            title: '',
            author: '',
            genre: '0',
            availability: '0'
        };
    
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
