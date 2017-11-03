import { Component, OnInit } from '@angular/core';
import { BookService } from '../service';
import { IFilterParams } from '../../interfaces/filter-params.interface';

@Component({
    selector: 'books-list',  // <books-list></books-list>
    providers: [
        BookService
    ],
    styleUrls: [],
    templateUrl: './list.component.html'
})
export class BooksListComponent implements OnInit {

    filterParams: IFilterParams;

    books: Array<Object>;

    constructor(private bookService: BookService) {

        this.filterParams = {
            title: '',
            author: '',
            genre: '0',
            availability: '0'
        };
    
    }

    ngOnInit() {
        this.bookService.getBooks().subscribe(books => this.books = books);
    }

    filterWasChanged(event) {
        this.filterParams = event;
    }

}
