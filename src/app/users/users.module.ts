import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersService } from './service/users.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [
        UsersService
    ],
    bootstrap: []
})

export class UsersModule {}