import { NgModule } from '@angular/core';

import { LoadingComponent } from './loading';
import { InputRangeComponent } from './input-range';

@NgModule({
    imports: [],
    declarations: [
        LoadingComponent,
        InputRangeComponent
    ],
    exports: [
        LoadingComponent,
        InputRangeComponent
    ],
    providers: [],
    bootstrap: []
})

export class UiModule {}