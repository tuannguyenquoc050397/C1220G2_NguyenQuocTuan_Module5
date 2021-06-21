import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BaiDangComponent} from './bai-dang/bai-dang.component';
import {DangtinComponent} from './dangtin/dangtin.component';

const routes: Routes = [
  {
    path: 'list',
    component: BaiDangComponent
  },
  {
    path: 'create',
    component: DangtinComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
