import { Component, Input } from '@angular/core';

@Component({
    selector: 'books-table',  // <books-table></books-table>
    styleUrls: [ './table.component.css' ],
    templateUrl: './table.component.html'
})
export class BooksTableComponent {

    @Input() filterParams: Object;
    @Input() books: Array<Object>;

    sortKey: String = 'title';
    ascSort: Boolean = true;

    sort(key) {
        (key === this.sortKey) && (this.ascSort = !this.ascSort);
        this.sortKey = key;
    }

}