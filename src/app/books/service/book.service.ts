import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BookService {

    private dataUrl = 'http://localhost:3000/assets/data.json';

    constructor(private http: Http) {}

    getBooks(): Observable<any[]>  {
        return this.http.get(this.dataUrl)
            .map(this.extractData);
    }

    /* Draft method */
    getBook(id: number): Observable<any[]>  {
        return this.http.get(this.dataUrl)
            .map((res: Response) => {
                let book;
                res.json().forEach(item => {
                    if (+item.id === id) {
                        book = item;
                    }
                })
                return book;
            });
    }

    save(data): Observable<any[]> {
        return this.http.post('https://jsonplaceholder.typicode.com/posts/', data)
            .map((res: Response) => {
                return res.json();
            });
    }

    add(data): Observable<any[]> {
        return this.http.post('https://jsonplaceholder.typicode.com/posts/', data)
            .map((res: Response) => {
                return res.json();
            });
    }

    private extractData(res: Response) {
        return res.json() || [];
    }

}