import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListDataPage } from './list-data.page';

const routes: Routes = [
  {
    path: '',
    component: ListDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListDataPageRoutingModule {}
