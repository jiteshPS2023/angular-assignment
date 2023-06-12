import { TimerEvents } from './../../shared/enums/TimerEvents';
import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { CountdownDetails } from 'src/app/shared/models/countdownDetails';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnChanges  {
  @Input() eventName!: string;
  @Input() timerValue!: number;
  @Output() timerDetails = new EventEmitter<CountdownDetails>();
  currentTimerValue: number = 0;
  
  interval: any;
  ngOnChanges() {
    if(this.timerValue>0 && this.eventName== TimerEvents.Started)
      this.startTimer();
    else if(this.eventName== TimerEvents.Paused)
      this.pauseTimer();
    else
    {
      this.currentTimerValue = 0;
      this.clearTimerInterval();
    }

  }
  startTimer() {
    console.log('Starting timer');

    if(this.currentTimerValue==0)
      this.currentTimerValue = this.timerValue;

    this.interval = setInterval(() => {
      if(this.currentTimerValue > 0) {
        this.currentTimerValue--;
      } else {
        this.currentTimerValue = 0;
        this.clearTimerInterval();
        let det : CountdownDetails = {timerValue: 0,eventName: TimerEvents.Completed};
        this.timerDetails.emit(det);
      }
    },1000)
  }
  pauseTimer(){
    console.log('Pausing timer');
    this.clearTimerInterval();
  }
  clearTimerInterval(){
    clearInterval(this.interval);
  }
}
