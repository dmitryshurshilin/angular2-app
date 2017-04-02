import { Component } from '@angular/core';
import { UsersService } from '../service';

@Component({
    selector: 'users-list',
    styleUrls: [ '../../styles/table.css' ],
    templateUrl: './list.component.html'
})
export class UsersListComponent {

    users: Array<Object>;

    constructor(private usersService: UsersService) {
        this.usersService.getUsers()
            .subscribe((books) => {
                    this.users = books;
                }
            );
    }

}