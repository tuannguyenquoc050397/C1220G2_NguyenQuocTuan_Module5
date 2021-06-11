import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryDeleteComponent } from './category-delete/category-delete.component';
import { CategoryUpdateComponent } from './category-update/category-update.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryListComponent } from './category-list/category-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CategoryRoutingModule} from './category-routing.module';



@NgModule({
  declarations: [CategoryDeleteComponent, CategoryUpdateComponent, CategoryCreateComponent, CategoryListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
