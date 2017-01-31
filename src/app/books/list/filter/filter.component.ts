import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IFilterParams } from '../../../interfaces/filter-params.interface';

@Component({
    selector: 'books-filter',  // <books-filter></books-filter>
    styleUrls: [ './filter.component.css' ],
    templateUrl: './filter.component.html'
})
export class BooksFilterComponent {

    @Input() filterParams: IFilterParams;
    @Output() onFilterChanged: EventEmitter<any>;

    filter: any;

    constructor() {
        this.onFilterChanged = new EventEmitter();
    }

    changeFilter() {
        this.onFilterChanged.emit(this.filterParams);
    }

}