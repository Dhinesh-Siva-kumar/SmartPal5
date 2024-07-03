import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: 'dashboard',
      loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    },
    {
      path: 'data-library',
      loadChildren: () => import('./data-library/data-library.module').then(m => m.DataLibraryModule),
    },
];
