import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'his-familiar',
    loadChildren: () => import('./his-familiar/his-familiar.module').then( m => m.HisFamiliarPageModule)
  },
  {
    path: 'hist',
    loadChildren: () => import('./hist/hist.module').then( m => m.HistPageModule)
  },
  {
    path: 'remedio',
    loadChildren: () => import('./remedio/remedio.module').then( m => m.RemedioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
function newFunction(): string {
  return 'home';
}

