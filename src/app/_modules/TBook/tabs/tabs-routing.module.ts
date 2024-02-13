import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../Home/Home.module').then(m => m.HomePageModule)
      },
      {
        path: 'programs',
        loadChildren: () => import('../Programs/Programs.module').then(m => m.ProgramsPageModule)
      },
      {
        path: 'exercises',
        loadChildren: () => import('../Exercises/Exercises.module').then(m => m.ExercisesPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
