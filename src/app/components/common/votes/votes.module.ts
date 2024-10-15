import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VotesComponent } from './votes.component';



@NgModule({
  declarations: [
    VotesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VotesComponent
  ]
})
export class VotesModule { }
