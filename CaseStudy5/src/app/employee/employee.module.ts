import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {RouterModule} from '@angular/router';
import {EmployeeRoutingModule} from './employee-routing.module';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [EmployeeCreateComponent, EmployeeListComponent],
  imports: [
    CommonModule,
    RouterModule,
    EmployeeRoutingModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }
