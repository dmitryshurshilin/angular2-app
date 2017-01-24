import { FormControl } from '@angular/forms';

export function yearsValidator(control: FormControl): { [s: string]: boolean } {
    const year = control.value;
    if (isNaN(year) || +year > 2017 || +year < 1900) {
        return {'yearsValidator' : year};
    }
}