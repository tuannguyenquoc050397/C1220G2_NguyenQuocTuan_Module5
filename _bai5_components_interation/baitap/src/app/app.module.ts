import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RatingBarComponent } from './rating-bar/rating-bar.component';
import { CountdownTimeComponent } from './countdown-time/countdown-time.component';

@NgModule({
  declarations: [
    AppComponent,
    RatingBarComponent,
    CountdownTimeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
