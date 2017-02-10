import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
    selector: '[modal]',
    host: {
        '(click)': 'showModal()'
    },
})
export class ModalDirective {

    @Input()
    message: String;

    constructor(_ElementRef: ElementRef) {
        console.log(_ElementRef);
    }

    showModal() {
        let modal = this.createModal();
        document.body.appendChild(modal);
    }

    createModal() {
        let modal = document.createElement('div');
        modal.classList.add('app-modal');
        modal.innerHTML = `
            <h2>Modal Title</h2>
            <p>Modal Content</p>
            <book-status [status]="Get" [info]="true" [actions]="true"></book-status>
        `;
        return modal;
    }

}