import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HisFamiliarPageRoutingModule } from './his-familiar-routing.module';

import { HisFamiliarPage } from './his-familiar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HisFamiliarPageRoutingModule
  ],
  declarations: [HisFamiliarPage]
})
export class HisFamiliarPageModule {}
