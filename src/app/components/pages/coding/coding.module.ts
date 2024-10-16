import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodingRoutingModule } from './coding-routing.module';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { CodingComponent } from './coding.component';
import { FooterComponent } from '../../common/footer/footer.component';


@NgModule({
  declarations: [
    CodingComponent
  ],
  imports: [
    NavbarComponent,
    FooterComponent,
    CommonModule,
    CodingRoutingModule
  ]
})
export class CodingModule { }
