import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'book-status',  // <book-status></book-status>
    template: `
        <div class="book-status">
            <div [ngSwitch]="status">
                <div *ngSwitchCase="0">
                    <span *ngIf="info">Unavailable</span>
                    <a href="#" *ngIf="actions">Return</a>
                </div>
                <div *ngSwitchCase="1">
                    <span *ngIf="info">Available</span>
                    <a href="#" *ngIf="actions">Get</a>
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