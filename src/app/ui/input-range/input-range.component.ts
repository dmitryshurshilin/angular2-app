import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'input-range',  // <input-range></input-range>
    styleUrls: [ './input-range.component.css' ],
    templateUrl: './input-range.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputRangeComponent),
            multi: true
        }
    ]
})
export class InputRangeComponent {

    @Input('inputValue') _inputValue: any;
    propagateChange = (_: any) => {};

    constructor() {}

    writeValue(value: any) {
        if (value !== undefined) {
            this.inputValue = value;
        }
    }

    registerOnChange(fn) {
        this.propagateChange = fn;
    }

    registerOnTouched() {}

    get inputValue() {
        return this._inputValue;
    }

    set inputValue(value) {
        this._inputValue = value;
        this.propagateChange(value);
    }

    changeValue(e) {
        this.inputValue = e.target.value;
    }

}