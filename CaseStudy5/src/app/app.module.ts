import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CustomerModule} from './customer/customer.module';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {ShareModule} from './share/share.module';
import {ServiceModule} from './service/service.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomerModule,
    AppRoutingModule,
    RouterModule,
    ShareModule,
    ServiceModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
