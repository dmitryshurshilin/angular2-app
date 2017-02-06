import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingComponent } from './loading';
import { InputRangeComponent } from './input-range';
import { StatusComponent } from './status';
import { ModalComponent, ModalDirective } from './modal';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        LoadingComponent,
        InputRangeComponent,
        StatusComponent,
        ModalComponent,
        ModalDirective
    ],
    exports: [
        LoadingComponent,
        InputRangeComponent,
        StatusComponent,
        ModalComponent,
        ModalDirective
    ],
    providers: [],
    bootstrap: []
})

export class UiModule {}