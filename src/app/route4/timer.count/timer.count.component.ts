import { timerService } from './../services/timer.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-timer-count',
  templateUrl: './timer.count.component.html',
  styleUrls: ['./timer.count.component.css']
})
export class TimerCountComponent {
  eventName: string = "";
  showError: boolean=false;
  constructor(private service: timerService){

  }
  checkInputValdity(inputTimer: HTMLInputElement){
    // console.log('Checking validity');
    if(inputTimer.checkValidity())
    {
      this.showError=false;
    }else
    {
      this.showError=true;
    }
  }
  startPauseTimer(value: any) {
      if (value != undefined && value != "") {
        if (this.eventName == "Started") {
          this.eventName = "Paused";
          this.service.pauseTimer(this.eventName);
        } else {
          this.eventName = "Started";
          this.service.startTimer(value, this.eventName);
        }
      }else
        this.showError=true;

  }
  resetTimer(inputTimer: HTMLInputElement) {
    this.eventName = "Reset";
    this.service.resetTimer(this.eventName);
    inputTimer.value = "";
  }
}
