import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CpanelComponent } from './cpanel.component';
import { MyAccountsComponent } from './my-accounts/my-accounts.component';

const routes: Routes = [
  {
    path: '',
    component: CpanelComponent,
    children: [
      {
        path: 'mis-cuentas',
        loadChildren: () => import('./my-accounts/my-accounts.module').then(m => m.MyAccountsModule)
      },
      {
        path: 'pvp-ranking',
        loadChildren: () => import('./pvp-ranking/pvp-ranking.module').then(m => m.PvpRankingModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CpanelRoutingModule { }
