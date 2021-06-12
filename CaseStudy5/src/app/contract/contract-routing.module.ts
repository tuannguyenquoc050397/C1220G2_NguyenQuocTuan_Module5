import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CustomerListComponent} from '../customer/customer-list/customer-list.component';
import {CustomerCreateComponent} from '../customer/customer-create/customer-create.component';
import {CustomerUpdateComponent} from '../customer/customer-update/customer-update.component';
import {ContractListComponent} from './contract-list/contract-list.component';
import {ContractCreateComponent} from './contract-create/contract-create.component';

const routes: Routes = [
  {
    path: 'list',
    component: ContractListComponent
  },
  {
    path: 'create',
    component: ContractCreateComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ContractRoutingModule { }
