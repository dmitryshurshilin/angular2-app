import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'books-filter',  // <books-filter></books-filter>
    styleUrls: [ './filter.component.css' ],
    templateUrl: './filter.component.html'
})
export class BooksFilterComponent {

    @Input() filterParams: any;
    @Output() onFilterChanged: EventEmitter<any>;

    filter: any;

    constructor() {
        this.onFilterChanged = new EventEmitter();
    }

    changeFilter() {
        this.onFilterChanged.emit(this.filterParams);
    }

}