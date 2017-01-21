import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'books-filter',  // <books-filter></books-filter>
    styleUrls: [ './filter.component.css' ],
    templateUrl: './filter.component.html'
})
export class BooksFilterComponent {

    @Output() onFilterChanged: EventEmitter<any>;

    filter: any;

    constructor() {
        this.onFilterChanged = new EventEmitter();
        this.filter = {};
        this.filter.title = '';
        this.filter.author = '';
        this.filter.genre = '0';
        this.filter.availability = '0';
    }

    changeFilter() {
        this.onFilterChanged.emit(this.filter);
    }

}