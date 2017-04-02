import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {

    private dataUrl = 'http://localhost:3001/books';

    constructor(private http: Http) {}

    getBooks(): Observable<any[]>  {
        return this.http.get(this.dataUrl)
            .map((res: Response) => {
                return res.json();
            });
    }

    getBook(id: number): Observable<any[]>  {
        return this.http.get(this.dataUrl + '/' + id)
            .map((res: Response) => {
                return res.json();
            });
    }

    save(id: number, data: any): Observable<any[]> {
        return this.http.put(this.dataUrl + '/' + id, data)
            .map((res: Response) => {
                return res.json();
            });
    }

    add(data): Observable<any[]> {
        return this.http.post(this.dataUrl, data)
            .map((res: Response) => {
                return res.json();
            });
    }

}