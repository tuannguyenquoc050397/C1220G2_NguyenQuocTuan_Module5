import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CreateContractComponent } from './create-contract/create-contract.component';
import { CreateServiceComponent } from './create-service/create-service.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { ListContractComponent } from './list-contract/list-contract.component';
import { ListServiceComponent } from './list-service/list-service.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    CreateEmployeeComponent,
    CreateContractComponent,
    CreateServiceComponent,
    ListCustomerComponent,
    ListEmployeeComponent,
    ListContractComponent,
    ListServiceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
