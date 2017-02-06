import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'book-status',  // <book-status></book-status>
    styles: [`
        .book-status__link {
            font-weight: 500;
            color: var(--color-primary-blue);
            cursor: pointer;
            border-bottom: 1px dashed var(--color-primary-blue);
        }
        .book-status__link:hover {
            color: var(--color-primary-blue-light);
            border-bottom: 1px dashed var(--color-primary-blue-light);
        }
    `],
    template: `
        <div class="book-status">
            <div [ngSwitch]="status">
                <div *ngSwitchCase="0">
                    <span *ngIf="info">Unavailable</span>
                    <span class="book-status__link" modal *ngIf="actions">Return</span>
                </div>
                <div *ngSwitchCase="1">
                    <span *ngIf="info">Available</span>
                    <span class="book-status__link" modal *ngIf="actions">Get</span>
                </div>
            </div>
        </div>`
})
export class StatusComponent implements OnInit {

    @Input()
    status: number;

    @Input()
    actions: boolean;

    @Input()
    info: boolean;

    ngOnInit() {}

}