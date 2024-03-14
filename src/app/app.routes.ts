import { Routes } from '@angular/router';
import { AuthGuard } from './_helpers/auth.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./_components/exploit/_tabs/tabs.routes').then(m => m.routes),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadComponent: () => import('./_components/entry/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: '', redirectTo: 'login', pathMatch : 'full'
  }
];