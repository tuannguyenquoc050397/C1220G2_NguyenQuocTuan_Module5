import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractListComponent } from './contract-list/contract-list.component';
import { ContractCreateComponent } from './contract-create/contract-create.component';
import {ContractRoutingModule} from './contract-routing.module';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [ContractListComponent, ContractCreateComponent],
  imports: [
    CommonModule,
    ContractRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class ContractModule { }
