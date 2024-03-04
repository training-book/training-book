import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuard } from 'src/app/_helpers/auth.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../Home/Home.module').then(m => m.HomePageModule), canActivate:[AuthGuard]
      },
      {
        path: 'programs',
        loadChildren: () => import('../Programs/Programs.module').then(m => m.ProgramsPageModule), canActivate:[AuthGuard]
      },
      {
        path: 'exercises',
        loadChildren: () => import('../Exercises/Exercises.module').then(m => m.ExercisesPageModule), canActivate:[AuthGuard]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
