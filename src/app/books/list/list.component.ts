import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
    selector: 'books-list',  // <books-list></books-list>
    providers: [],
    styleUrls: [ './list.component.css' ],
    templateUrl: './list.component.html'
})
export class BooksListComponent implements OnInit {

    filterTitle: string = '';
    filterAuthor: string = '';
    filterGenre: string = '0';
    filterAvailability: string = '0';

    books: Object;
    loading: Boolean;

    constructor(public http: Http) {}

    ngOnInit() {
        this.loading = true;

        this.http.request('http://localhost:3000/assets/data.json')
            .subscribe((res: Response) => {
                this.books = res.json();
                this.loading = false;
            });
    }

}
