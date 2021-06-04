import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  red = 0;
  blu = 0;
  green = 0;
  color = '#EEEEEE';

  constructor() {
  }

  ngOnInit(): void {
  }

  change(): void {
    let redStr = this.red.toString(16);
    let bluStr = this.blu.toString(16);
    let greenStr = this.green.toString(16);

    if (redStr.length === 1){
      redStr = '0' + redStr;
    }
    if (bluStr.length === 1){
      bluStr = '0' + bluStr;
    }
    if (greenStr.length === 1){
      greenStr = '0' + greenStr;
    }
    this.color = '#' + redStr + greenStr + bluStr;
  }
}
