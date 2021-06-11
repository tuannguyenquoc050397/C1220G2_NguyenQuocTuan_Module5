import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import {ProductRoutingModule} from './product-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [ProductListComponent, ProductCreateComponent, ProductUpdateComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class ProductModule { }
