import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderModule } from '../../common/header/header.module';
import { EventsModule } from '../../common/events/events.module';
import { VotesModule } from '../../common/votes/votes.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    EventsModule,
    VotesModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
