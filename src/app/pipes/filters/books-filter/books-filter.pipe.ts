import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'booksFilter' })
export class BooksFilter implements PipeTransform {
    transform(books: any, args: string):any {
        return books;
    }
}