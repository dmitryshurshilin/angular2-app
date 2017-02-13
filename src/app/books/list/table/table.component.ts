import { Component, Input } from '@angular/core';

@Component({
    selector: 'books-table',
    styleUrls: [ '../../../styles/table.css' ],
    templateUrl: './table.component.html'
})
export class BooksTableComponent {

    @Input() filterParams: any;
    @Input() books: Array<Object>;

    sortKey: String = 'title';
    ascSort: Boolean = true;

    sort(key) {
        (key === this.sortKey) && (this.ascSort = !this.ascSort);
        this.sortKey = key;
    }

}