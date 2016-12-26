import { Component } from '@angular/core';

@Component({
    selector: 'books-list',  // <books-list></books-list>
    providers: [],
    styleUrls: [ './list.component.css' ],
    templateUrl: './list.component.html'
})
export class BooksListComponent {

    constructor() {}

    ngOnInit() {
        console.log('hello `BooksList` component');
    }

}
