import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DictionaryPageComponent} from './dictionary-page/dictionary-page.component';
import {DictionaryDetailComponent} from './dictionary-detail/dictionary-detail.component';

const routes: Routes = [
  {path: '', component: DictionaryPageComponent},
  {path: 'list-word', component: DictionaryPageComponent},
  {path: 'detail-word/:word', component: DictionaryDetailComponent},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
