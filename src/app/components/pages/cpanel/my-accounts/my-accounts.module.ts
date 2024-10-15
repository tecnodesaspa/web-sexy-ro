import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAccountsRoutingModule } from './my-accounts-routing.module';
import { MyAccountsComponent } from './my-accounts.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';


@NgModule({
  declarations: [
    MyAccountsComponent
  ],
  imports: [
    CommonModule,
    MyAccountsRoutingModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    PaginationModule
  ]
})
export class MyAccountsModule { }
