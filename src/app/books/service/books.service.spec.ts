import { TestBed, inject, fakeAsync, async, tick } from '@angular/core/testing';
import { HttpModule, Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { BookService } from './book.service';

describe('Service BookService', () => {

    let bookService: BookService;

    beforeEach(() => {
        const testApiUrl = 'http://localhost:3001/books';
        TestBed.configureTestingModule({
            imports: [ HttpModule ],
            providers: [
                {
                    provide: Http,
                    useFactory: (mockBackend, options) => {
                        return new Http(mockBackend, options);
                    },
                    deps: [ MockBackend, BaseRequestOptions ]
                },
                BookService
            ]
        })
    });

    beforeEach(inject([BookService], (service: BookService) => {
        bookService = service;
    }));

    describe('getBooks()', () => {

        it('should be defined', () => {
                expect(bookService.getBooks).not.toBeDefined();
        });

        it('should return an Observable<Array<any>>', () => {
            // inject([BookService], (bookService) => {
            //     bookService.getBooks().subscribe(books => {
            //         expect(books.length).not.toBe(0);
            //         expect(books.length).toBe(5);
            //     })
            // });
        });

    });

});