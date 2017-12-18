import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService {

    private dataUrl = 'http://localhost:3001/users';

    constructor(private httpClient: HttpClient) {}

    getUsers(): Observable<any>  {
        return this.httpClient.get(this.dataUrl)
            .map((res: Response) => {
                return res;
            });
    }

    getUser(id: number): Observable<any>  {
        return this.httpClient.get(this.dataUrl + '/' + id)
            .map((res: Response) => {
                return res;
            });
    }

}
