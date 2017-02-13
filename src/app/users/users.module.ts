import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui/ui.module';

import { UsersService } from './service/';
import { UsersListComponent } from './list/';

@NgModule({
    imports: [
        CommonModule,
        UiModule
    ],
    declarations: [
        UsersListComponent
    ],
    providers: [
        UsersService
    ],
    bootstrap: []
})

export class UsersModule {}