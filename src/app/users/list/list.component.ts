import { Component } from '@angular/core';
import { UsersService } from '../service';

@Component({
    selector: 'users-list',
    styleUrls: [ '../../styles/table.css' ],
    templateUrl: './list.component.html'
})
export class UsersListComponent {

    users: Array<Object>;
    loading: Boolean;

    constructor(private usersService: UsersService) {
        this.loading = true;
        this.usersService.getUsers()
            .subscribe((books) => {
                    this.users = books;
                    this.loading = false;
                }
            );
    }

}