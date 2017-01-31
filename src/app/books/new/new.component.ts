import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { BookService } from '../service/book.service';
import { inputRangeComponentValidator } from '../../ui/input-range';

@Component({
    selector: 'book-new', // <book-new></book-new>
    providers: [
        BookService
    ],
    styleUrls: [ './new.component.css' ],
    templateUrl: './new.component.html'
})

export class BookNewComponent {

    private newForm: any;

    constructor(private router: Router, public fb: FormBuilder, private bookService: BookService) {
        this.newForm = this.fb.group({
            name: ["", Validators.required],
            author: [""],
            genre: [""],
            year: ["", [Validators.required, inputRangeComponentValidator(1900, 2019)]],
            description: [""],
            buy: [""]
        });
    }

    add() {
        this.bookService.add(this.newForm.value).subscribe(res => {
            this.router.navigate(['/books/']);
        });
    }

}
