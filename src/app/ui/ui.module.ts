import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingComponent } from './loading';
import { InputRangeComponent } from './input-range';
import { StatusComponent } from './status';
import { ModalComponent } from './modal';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        LoadingComponent,
        InputRangeComponent,
        StatusComponent,
        ModalComponent
    ],
    exports: [
        LoadingComponent,
        InputRangeComponent,
        StatusComponent,
        ModalComponent
    ],
    providers: [],
    bootstrap: []
})

export class UiModule {}