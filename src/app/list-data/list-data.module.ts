import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListDataPageRoutingModule } from './list-data-routing.module';

import { ListDataPage } from './list-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListDataPageRoutingModule
  ],
  declarations: [ListDataPage]
})
export class ListDataPageModule {}
