import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobPipe } from './job/job.pipe';



@NgModule({
  declarations: [
    JobPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    JobPipe
  ]
})
export class PipesModule { }
