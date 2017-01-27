import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { yearsValidator } from '../../validators/years/years.validator';
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
    private editForm: any;

    constructor(private route: ActivatedRoute, private router: Router, public fb: FormBuilder, private bookService: BookService) {

        this.editForm = this.fb.group({
            name: ["", Validators.required],
            author: [""],
            genre: [""],
            year: ["", [Validators.required, yearsValidator]],
            description: [""],
            buy: [""]
        });

    }

    ngOnInit() {
        this.loading = true;
        this.sub = this.route.params.subscribe(params => {
            this.bookService.getBook(+params['id']).subscribe((book: any) => {
                this.editForm.controls['name'].setValue(book.title);
                this.editForm.controls['author'].setValue(book.author);
                this.editForm.controls['genre'].setValue(book.genre);
                this.editForm.controls['year'].setValue(book.year);
                this.editForm.controls['description'].setValue(book.description);
                this.editForm.controls['buy'].setValue(book.buy);
                this.loading = false;
            });
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    save() {
        this.bookService.save(this.editForm.value).subscribe(res => {
            this.router.navigate(['/book/view/', '5']);
        });
    }

}