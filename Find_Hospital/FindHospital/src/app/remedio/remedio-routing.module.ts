import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemedioPage } from './remedio.page';

const routes: Routes = [
  {
    path: '',
    component: RemedioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemedioPageRoutingModule {}
