import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-time',
  templateUrl: './countdown-time.component.html',
  styleUrls: ['./countdown-time.component.css']
})
export class CountdownTimeComponent implements OnInit {

  timeCountDown = 10;
  private interval = 0;
  constructor() { }

  ngOnInit(): void {
  }

  private countDown(): void {
      clearInterval(this.interval);
      this.interval = setInterval(() => {
      this.timeCountDown = this.timeCountDown -1;
      if (this.timeCountDown == 0) {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  start(): void{
    if (this.timeCountDown <=0){
      this.timeCountDown = 10;
    }
    this.countDown()
  }

  reset(): void {
    clearInterval(this.interval);
    this.timeCountDown = 10;
  }

  stop(): void{
    clearInterval(this.interval);
  }

}
