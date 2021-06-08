import {Component, DoCheck, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit {

  backgroundString = ['yellow','yellow','yellow','yellow','yellow','yellow','yellow','yellow','yellow','yellow'];

  @Input()
  ratingValue = 0;

  arrayValue = [0,1,2,3,4,5,6,7,8,9];

  constructor() { }

  ngOnInit(): void {
    this.setValueRatingAndColor(Number(this.ratingValue));
  }

  setValueRatingAndColor(number: number) {
    this.backgroundString = ['yellow','yellow','yellow','yellow','yellow','yellow','yellow','yellow','yellow','yellow'];
    this.ratingValue = number;
    for (let i = 0; i<number; i++){
      this.backgroundString[i] = 'red';
    }

  }


}
