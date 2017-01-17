import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'booksSort' })

export class BooksSort implements PipeTransform {
    transform(books: Array<Object>, sortKey: string, ascSort: boolean):any {
        return books.sort((a, b) => {
            const aValue = a[sortKey].toLowerCase();
            const bValue = b[sortKey].toLowerCase();
            if (aValue < bValue) {
                return ascSort ? -1 : 1;
            }
            if (aValue > bValue) {
                return ascSort ? 1 : -1;
            }
            return 0;
        });
    }
}