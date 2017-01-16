import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class BookService {

    constructor(private http: Http) {}

    getBooks() {
        return this.http.request('http://localhost:3000/assets/data.json');
    }

}