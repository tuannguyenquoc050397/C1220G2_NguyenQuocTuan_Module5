import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ImageSliderModule} from './image-slider/image-slider.module';



@NgModule({
  declarations: [
    AppComponent,
],
  imports: [
    ImageSliderModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
