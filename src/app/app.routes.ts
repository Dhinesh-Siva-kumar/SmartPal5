import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: '',
      loadChildren: () => import('./main-dashboard/main-dashboard.module').then(m => m.MainDashboardModule),
    },
    {
      path: 'data-library',
      loadChildren: () => import('./data-library/data-library.module').then(m => m.DataLibraryModule),
    },
];
