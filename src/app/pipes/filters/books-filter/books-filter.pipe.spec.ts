import { BooksFilter } from './books-filter.pipe';

describe('Pipe BooksFilter', () => {
    let booksFilter: BooksFilter;
    let items = [
        {
            id: 2,
            author: 'Arthur Hawkins',
            title: 'New York Book'
        },
        {
            id: 1,
            author: 'Katherine Peterson',
            title: 'Barcelona Book'
        },
        {
            id: 3,
            author: 'Benjamin Holland',
            title: 'London Book'
        }
    ];

    beforeEach(() => {
        booksFilter = new BooksFilter();
    });

    it('should filter data', () => {

        let result = booksFilter.transform(items, {title: 'London'});
        expect(result[0].id).toBe(3);
        expect(result[0].title).toBe('London Book');

        result = booksFilter.transform(items, {author: 'Katherine'});
        expect(result[0].id).toBe(1);
        expect(result[0].title).toBe('Barcelona Book');

    });

});