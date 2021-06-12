import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCreateComponent } from './service-create/service-create.component';
import { ServiceListComponent } from './service-list/service-list.component';
import {ServiceRoutingModule} from './service-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [ServiceCreateComponent, ServiceListComponent],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class ServiceModule { }
