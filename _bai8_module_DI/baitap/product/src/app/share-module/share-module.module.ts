import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule} from '@angular/router';
import {SharedRoutingModule} from './shared-routing.module';
import {NgbNavModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [NavbarComponent],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedRoutingModule,
    NgbNavModule
  ]
})
export class ShareModuleModule { }
