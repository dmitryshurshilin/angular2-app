import { Component } from '@angular/core';

@Component({
    selector: 'book-edit',  // <books-edit></books-edit>
    providers: [],
    styleUrls: [ './edit.component.css' ],
    templateUrl: './edit.component.html'
})
export class BookEditComponent {

    constructor() {}

    ngOnInit() {
        console.log('hello `BookEditComponent` component');
    }

}