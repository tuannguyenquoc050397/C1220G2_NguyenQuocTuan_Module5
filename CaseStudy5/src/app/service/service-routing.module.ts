import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ServiceListComponent} from './service-list/service-list.component';
import {ServiceCreateComponent} from './service-create/service-create.component';


const routes: Routes = [
  {
    path: 'list',
    component: ServiceListComponent
  },
  {
    path: 'create',
    component: ServiceCreateComponent
  },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ServiceRoutingModule { }
