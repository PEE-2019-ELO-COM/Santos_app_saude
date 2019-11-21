import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HisFamiliarPage } from './his-familiar.page';

const routes: Routes = [
  {
    path: '',
    component: HisFamiliarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HisFamiliarPageRoutingModule {}
