import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService {

    private dataUrl = 'http://localhost:3001/users';

    constructor(private http: Http) {}

    getUsers(): Observable<any[]>  {
        return this.http.get(this.dataUrl)
            .map((res: Response) => {
                return res.json();
            });
    }

    getUser(id: number): Observable<any[]>  {
        return this.http.get(this.dataUrl + '/' + id)
            .map((res: Response) => {
                return res.json();
            });
    }

}