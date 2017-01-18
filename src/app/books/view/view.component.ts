import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../service/book.service';

@Component({
    selector: 'book-view',  // <books-view></books-view>
    providers: [
        BookService
    ],
    styleUrls: [ './view.component.css' ],
    templateUrl: './view.component.html'
})
export class BookViewComponent {

    book: Object;
    loading: Boolean;

    constructor(private route: ActivatedRoute, private bookService: BookService) {}

    ngOnInit() {
        this.loading = true;
        this.route.params.subscribe(params => {
            this.bookService.getBook(+params['id']).subscribe((book) => {
                this.book = book;
                this.loading = false;
            });
        });
    }

}