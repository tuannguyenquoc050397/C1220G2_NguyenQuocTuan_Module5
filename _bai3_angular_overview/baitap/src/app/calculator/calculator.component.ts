import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  num1 = 0;
  num2 = 0;
  result: any = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  calculator(action: string): void {
    switch (action) {
      case 'add':
        this.result = this.num1 + this.num2;
        break;
      case 'sub':
        this.result = this.num1 - this.num2;
        break;
      case 'mul':
        this.result = this.num1 * this.num2;
        break;
      case 'div':
        if (this.num2 === 0) {
          this.result = 'this.num2 can not is 0';
        }else {
          this.result = this.num1 / this.num2;
        }
        break;
    }
  }
}
