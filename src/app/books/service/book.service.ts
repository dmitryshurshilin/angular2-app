import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {

    private dataUrl = 'http://localhost:3001/books';

    constructor(private httpClient: HttpClient) {}

    getBooks(): Observable<any>  {
        return this.httpClient.get(this.dataUrl)
            .map((res: Response) => {
                return res;
            });
    }

    getBook(id: number): Observable<any>  {
        return this.httpClient.get(this.dataUrl + '/' + id)
            .map((res: Response) => {
                return res;
            });
    }

    save(id: number, data: any): Observable<any> {
        return this.httpClient.put(this.dataUrl + '/' + id, data)
            .map((res: Response) => {
                return res;
            });
    }

    add(data): Observable<any> {
        return this.httpClient.post(this.dataUrl, data)
            .map((res: Response) => {
                return res;
            });
    }

}
