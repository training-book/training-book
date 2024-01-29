import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./_modules/TBook/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  // {
  //   path : 'login',
  //   loadChildren: ()=> import('./_modules/Login/')
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
