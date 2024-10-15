import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PvpRankingComponent } from './pvp-ranking.component';

const routes: Routes = [
  {
    path: '',
    component: PvpRankingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PvpRankingRoutingModule { }
