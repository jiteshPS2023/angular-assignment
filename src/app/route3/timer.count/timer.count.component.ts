import { Component, EventEmitter, Output } from '@angular/core';
import { countdownDetails } from '../models/countdownDetails'
@Component({
  selector: 'app-timer-count',
  templateUrl: './timer.count.component.html',
  styleUrls: ['./timer.count.component.css']
})
export class TimerCountComponent {
  eventName: string = "";
  showError: boolean=false;
  @Output() timerDetails = new EventEmitter<countdownDetails>();
  
  
  checkInputValdity(inputTimer: HTMLInputElement){
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
      } else {
        this.eventName = "Started";
      }
      let det = new countdownDetails(value, this.eventName);
      this.timerDetails.emit(det);
    }else
    this.showError=true;
  }
  resetTimer(inputTimer: HTMLInputElement) {
    this.eventName = "Reset";
    let det = new countdownDetails(0, this.eventName);
    this.timerDetails.emit(det);
    inputTimer.value = "";
  }
}
