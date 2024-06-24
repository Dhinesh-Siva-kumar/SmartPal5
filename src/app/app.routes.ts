import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: '',
      loadChildren: () => import('./data-library/data-library.module').then(m => m.DataLibraryModule),
    },
];
