import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'booksFilter' })

export class BooksFilter implements PipeTransform {
    transform(books: Array<any>, filterParams: Object):any {
        return books.filter((book) => {
            return book;
            // return ((!title || title && ~book.title.toUpperCase().indexOf(title.toUpperCase())) &&
            //         (!author || author && ~book.author.toUpperCase().indexOf(author.toUpperCase())) &&
            //         (!genre || genre === '0' || genre && book.genre === genre) &&
            //         (!availability || availability === '0' || availability && book.isAvailable === availability)
            //     );
        });
    }
}