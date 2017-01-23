import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { BookService } from '../service/book.service';

@Component({
    selector: 'book-edit',  // <book-edit></book-edit>
    providers: [
        BookService
    ],
    styleUrls: [ './edit.component.css' ],
    templateUrl: './edit.component.html'
})
export class BookEditComponent {

    private sub: any;
    private id: Number;
    private book: Object;
    private loading: Boolean;

    public editForm = this.fb.group({
        name: ["", Validators.required],
        author: [""],
        genre: [""],
        year: [""],
        description: [""],
        buy: [""]
    });

    constructor(private route: ActivatedRoute, public fb: FormBuilder, private bookService: BookService) {}

    ngOnInit() {
        this.loading = true;
        this.sub = this.route.params.subscribe(params => {
            this.bookService.getBook(+params['id']).subscribe((book) => {
                this.book = book;
                this.loading = false;
            });
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    save() {
        this.bookService.save(this.editForm.value).subscribe(res => {
            console.log(res);
        });
    }

}