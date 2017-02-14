import { BooksSort } from './books-sort.pipe';

describe('Pipe BooksSort', () => {
    let booksSort: BooksSort;
    let items = [
        {
            id: 2,
            name: 'Arthur Hawkins',
            city: 'New York'
        },
        {
            id: 1,
            name: 'Katherine Peterson',
            city: 'Barcelona'
        },
        {
            id: 3,
            name: 'Benjamin Holland',
            city: 'London'
        }
    ];

    beforeEach(() => {
        booksSort = new BooksSort();
    });

    it('should return sorted array', () => {

        let result = booksSort.transform(items, 'name', true);
        expect(result[0].id).toBe(2);

        result = booksSort.transform(items, 'name', false);
        expect(result[0].id).toBe(1);

    });

});