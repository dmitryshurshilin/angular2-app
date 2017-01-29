import { Component } from '@angular/core';

@Component({
    selector: 'app-nav',  // <app-nav></app-nav>
    styleUrls: [ './nav.component.css' ],
    templateUrl: './nav.component.html'
})
export class NavComponent {

    links: Array<Object>;

    constructor() {

        this.links = [
            {
                path: './',
                title: 'Home'
            },
            {
                path: './books',
                title: 'Books'
            },
            {
                path: './book/new',
                title: 'Add Book'
            },
            {
                path: './order',
                title: 'Order'
            }
        ];

    }
}