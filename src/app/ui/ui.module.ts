import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingComponent } from './loading';
import { InputRangeComponent } from './input-range';
import { StatusComponent } from './status';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        LoadingComponent,
        InputRangeComponent,
        StatusComponent
    ],
    exports: [
        LoadingComponent,
        InputRangeComponent,
        StatusComponent
    ],
    providers: [],
    bootstrap: []
})

export class UiModule {}