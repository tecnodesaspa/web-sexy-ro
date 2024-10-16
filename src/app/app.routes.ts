import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./components/pages/coding/coding.module').then(m => m.CodingModule)
    }
];
