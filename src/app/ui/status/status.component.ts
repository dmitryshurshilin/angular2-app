import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'book-status',  // <book-status></book-status>
    styles: [`
        .book-status__link {
            font-weight: 500;
            color: var(--color-primary-blue);
            cursor: pointer;
        }
        .book-status__link:hover {
            color: var(--color-primary-blue-light);
        }
    `],
    template: `
        <div class="book-status">
            <div *ngIf="availability">
                <span *ngIf="info">Available</span>
                <a [routerLink]="['/book/get/', id]" class="book-status__link" *ngIf="actions">Get</a>
            </div>
            <div *ngIf="!availability">
                <span *ngIf="info">Unavailable</span>
                <a [routerLink]="['/book/return/', id]" class="book-status__link" *ngIf="actions">Return</a>
            </div>
        </div>`
})
export class StatusComponent implements OnInit {

    @Input()
    id: number;

    @Input()
    availability: boolean;

    @Input()
    actions: boolean;

    @Input()
    info: boolean;

    ngOnInit() {}

}