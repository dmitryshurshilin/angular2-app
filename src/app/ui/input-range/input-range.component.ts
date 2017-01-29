import { Component, Input, forwardRef, OnChanges } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

export function inputRangeComponentValidator(min, max) {
    return (c: FormControl) => {
        let err = {
            rangeError: {
                given: c.value,
                min: min,
                max: max
            }
        };
        return (c.value > +max || c.value < +min) ? err : null;
    }
}

@Component({
    selector: 'input-range',  // <input-range></input-range>
    styleUrls: [ './input-range.component.css' ],
    templateUrl: './input-range.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputRangeComponent),
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => InputRangeComponent),
            multi: true
        }
    ]
})
export class InputRangeComponent implements ControlValueAccessor, OnChanges {

    @Input('inputValue') _inputValue: any;
    @Input('min') min: any;
    @Input('max') max: any;
    propagateChange:any = () => {};
    validateFn:any = () => {};

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

    ngOnChanges(inputs) {
        if (inputs.max || inputs.min) {
            this.validateFn = inputRangeComponentValidator(inputs.min, inputs.max)
        }
    }

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

    validate(c: FormControl) {
        return this.validateFn(c);
    }

}