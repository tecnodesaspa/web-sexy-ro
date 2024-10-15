import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CpanelRoutingModule } from './cpanel-routing.module';
import { CpanelComponent } from './cpanel.component';
import { PvpRankingComponent } from './pvp-ranking/pvp-ranking.component';


@NgModule({
  declarations: [
    CpanelComponent,
  ],
  imports: [
    CommonModule,
    CpanelRoutingModule
  ]
})
export class CpanelModule { }
