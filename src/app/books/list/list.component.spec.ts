import {
    inject,
    TestBed
} from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

// Load the implementations that should be tested
import { BooksListComponent } from './list.component';
import { BookService } from '../service/book.service'; 

class MockBookService {
    public getBooks(): any {
        return {
            subscribe() {
                console.log('Subscribe...');
            }
        };
    }
}

describe('BooksListComponent', () => {

    let mockBookService: MockBookService;

    beforeEach(() => {

        mockBookService = new MockBookService();

        TestBed.configureTestingModule({
    
            providers: [
                BooksListComponent,
                { provide: BookService, useValue: mockBookService },
            ]

        });
    });

    it('should have a method filterWasChanged', inject([ BooksListComponent ], (component: BooksListComponent) => {
       expect(component.filterWasChanged).toBeDefined();
        component.filterParams = 0;
        component.filterWasChanged(1);
        expect(component.filterParams).toEqual(1);
    }));

    it('should have a method ngOnInit', inject([ BooksListComponent ], (component: BooksListComponent) => {
       expect(component.ngOnInit).toBeDefined();
       this.loading = false;
       component.ngOnInit();
       expect(component.loading).toEqual(true);
    }));

});
