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

    private extractData(res: Response) {
        return res.json() || [];
    }

}