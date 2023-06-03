import { TimerEvents } from './../../shared/enums/TimerEvents';
import { TimerService } from '../services/Timer.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-timer-count',
  templateUrl: './timer-count.component.html',
  styleUrls: ['./timer-count.component.css']
})
export class TimerCountComponent {
  inputTimer: string = "";
  eventName: string = "";
  showError: string="";
  constructor(private service: TimerService){

  }
  checkInputValdity(){
    let inpNumber = Number(this.inputTimer);
    if(isNaN(inpNumber) || !this.inputTimer)
    {
      this.showError="true";
    }else
    {
      this.showError="false";
    }
  }
  startPauseTimer() {
      if (this.inputTimer != undefined && this.inputTimer != "") {
        if (this.eventName == TimerEvents.Started 
           && this.service.currentTimervalue>0) {
          this.eventName = TimerEvents.Paused;
          this.service.pauseTimer(this.eventName);
        } else {
          let inpNumber = Number(this.inputTimer);
          this.eventName = TimerEvents.Started;
          this.service.startTimer(inpNumber, this.eventName);
        }
      }else
        this.showError="true";

  }
  resetTimer() {
    this.eventName = TimerEvents.Reset;
    this.service.resetTimer(this.eventName);
    this.inputTimer = "";
  }
}
