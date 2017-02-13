import { Component } from '@angular/core';

export interface INavLink {
    path: string;
    title: string;
}

@Component({
    selector: 'app-nav',  // <app-nav></app-nav>
    styleUrls: [ './nav.component.css' ],
    templateUrl: './nav.component.html'
})
export class NavComponent {

    links: Array<INavLink> = [];

    constructor() {

        this.links.push({ path: './', title: 'Home' });
        this.links.push({ path: './books', title: 'Books' });
        this.links.push({ path: './book/new', title: 'Add Book' });
        this.links.push({ path: './users', title: 'Users' });

    }
}