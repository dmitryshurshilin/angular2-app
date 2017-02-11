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
            <div [ngSwitch]="status">
                <div *ngSwitchCase="0">
                    <span *ngIf="info">Unavailable</span>
                    <a [routerLink]="['/book/return/', id]" class="book-status__link" *ngIf="actions">Return</a>
                </div>
                <div *ngSwitchCase="1">
                    <span *ngIf="info">Available</span>
                    <a [routerLink]="['/book/get/', id]" class="book-status__link" *ngIf="actions">Get</a>
                </div>
            </div>
        </div>`
})
export class StatusComponent implements OnInit {

    @Input()
    id: number;

    @Input()
    status: number;

    @Input()
    actions: boolean;

    @Input()
    info: boolean;

    ngOnInit() {}

}