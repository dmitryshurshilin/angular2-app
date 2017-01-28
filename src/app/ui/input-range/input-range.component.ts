import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'input-range',  // <input-range></input-range>
    styleUrls: [ './input-range.component.css' ],
    templateUrl: './input-range.component.html',
    { 
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CounterInputComponent),
      multi: true
    }
})
export class InputRangeComponent implements ControlValueAccessor {

    @Input() min;
    @Input() max;


    constructor() {}

}

// https://blog.thoughtram.io/angular/2016/07/27/custom-form-controls-in-angular-2.html