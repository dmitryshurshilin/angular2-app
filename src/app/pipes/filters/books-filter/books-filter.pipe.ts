import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'booksFilter' })
export class BooksFilter implements PipeTransform {
    transform(books: any, author: string, aviablity: number):any {

        if (!author && !aviablity) {
            return books;
        }

        return books.filter((book) => {
            return (book.author.indexOf(author) !== -1);
        });

    }
}