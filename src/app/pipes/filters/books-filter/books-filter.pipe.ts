import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'booksFilter',
    pure: false
})

export class BooksFilter implements PipeTransform {

    transform(books: Array<any>, filterParams: any):any {
        return books.filter(book =>  this.isMatched(filterParams, book));
    }

    isMatched(filterParams, book) {
        return ((!filterParams.title || (filterParams.title && ~book.title.toUpperCase().indexOf(filterParams.title.toUpperCase()))) &&
                (!filterParams.author || filterParams.author && ~book.author.toUpperCase().indexOf(filterParams.author.toUpperCase())) &&
                (!filterParams.genre || filterParams.genre === '0' || filterParams.genre && book.genre === filterParams.genre) &&
                ((!filterParams.status || filterParams.status === '-1') || (filterParams.status && filterParams.status !== '-1' && book.status === filterParams.status))
            );
    }

}