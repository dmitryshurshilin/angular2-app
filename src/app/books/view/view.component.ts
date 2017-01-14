import { Component } from '@angular/core';

@Component({
    selector: 'book-view',  // <books-view></books-view>
    providers: [],
    styleUrls: [ './view.component.css' ],
    templateUrl: './view.component.html'
})
export class BookViewComponent {

    constructor() {}

    ngOnInit() {
        console.log('hello `BookViewComponent` component');
    }

}