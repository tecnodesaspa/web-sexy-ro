import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    EventsComponent
  ],
  imports: [
    CommonModule,
    NgbTooltipModule
  ],
  exports: [
    EventsComponent
  ]
})
export class EventsModule { }
