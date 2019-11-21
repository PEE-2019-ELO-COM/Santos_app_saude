import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemedioPageRoutingModule } from './remedio-routing.module';

import { RemedioPage } from './remedio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemedioPageRoutingModule
  ],
  declarations: [RemedioPage]
})
export class RemedioPageModule {}
