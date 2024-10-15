import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PvpRankingRoutingModule } from './pvp-ranking-routing.module';
import { PvpRankingComponent } from './pvp-ranking.component';
import { PipesModule } from '../../../../pipes/pipes.module';


@NgModule({
  declarations: [
    PvpRankingComponent
  ],
  imports: [
    CommonModule,
    PvpRankingRoutingModule,
    PipesModule
  ]
})
export class PvpRankingModule { }
