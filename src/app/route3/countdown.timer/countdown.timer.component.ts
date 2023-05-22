import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown.timer.component.html',
  styleUrls: ['./countdown.timer.component.css']
})
export class CountdownTimerComponent implements OnChanges  {
  @Input() eventName!: string;
  @Input() timerValue!: number;
  
  interval: any;
  ngOnChanges() {
    if(this.timerValue>0 && this.eventName=="Started")
      this.startTimer();
    else if(this.eventName=="Paused")
      this.pauseTimer();
      else
       {
        this.timerValue = 0;
      clearInterval(this.interval);
       }

  }
  startTimer() {
    console.log('Starting timer');
    this.interval = setInterval(() => {
      if(this.timerValue > 0) {
        this.timerValue--;
      } else {
        this.timerValue = 0;
      }
    },1000)
  }
  pauseTimer(){
    console.log('Pausing timer');
    clearInterval(this.interval);
  }
}
