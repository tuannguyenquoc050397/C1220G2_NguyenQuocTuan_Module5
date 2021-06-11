import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgSlideComponent } from './img-slide/img-slide.component';
import { ImgSliderComponent } from './img-slider/img-slider.component';



@NgModule({
  declarations: [
    ImgSlideComponent,
    ImgSliderComponent
  ],
  exports: [
    ImgSliderComponent,
    ImgSlideComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ImageSliderModule { }
