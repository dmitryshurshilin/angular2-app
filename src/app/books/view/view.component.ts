import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../service';

@Component({
    selector: 'book-view',  // <books-view></books-view>
    providers: [
        BookService
    ],
    styleUrls: [ './view.component.css' ],
    templateUrl: './view.component.html'
})
export class BookViewComponent {

    private sub: any;
    private id: Number;
    private book: Object;
    private loading: Boolean;

    constructor(private route: ActivatedRoute, private bookService: BookService) {}

    ngOnInit() {
        this.loading = true;
        this.sub = this.route.params.subscribe(params => {
            this.bookService.getBook(+params['id']).subscribe((book) => {
                this.book = book;
                this.loading = false;
            });
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}