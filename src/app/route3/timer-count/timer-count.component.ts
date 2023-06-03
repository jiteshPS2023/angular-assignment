import { TimerEvents } from './../../shared/enums/TimerEvents';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CountdownDetails } from '../../shared/models/countdownDetails';

@Component({
  selector: 'app-timer-count',
  templateUrl: './timer-count.component.html',
  styleUrls: ['./timer-count.component.css']
})
export class TimerCountComponent {
  inputTimer: string = "";
  eventName: string = "";
  showError: string="";
  @Output() timerDetails = new EventEmitter<CountdownDetails>();
  @Input() eventNameInput!: string;
  
  
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
    let inpNumber = Number(this.inputTimer);
    if (this.inputTimer != undefined && this.inputTimer != "") {
      if (this.eventName == TimerEvents.Started && this.eventNameInput != TimerEvents.Completed) {
        this.eventName = TimerEvents.Paused;
      } else {
        this.eventName = TimerEvents.Started;
      }
      let det : CountdownDetails = {timerValue: inpNumber,eventName: this.eventName};
      this.timerDetails.emit(det);
    }else
    this.showError="true";
  }
  resetTimer() {
    this.eventName = TimerEvents.Reset;
    let det : CountdownDetails = {timerValue: 0,eventName: this.eventName};
    this.timerDetails.emit(det);
    this.inputTimer = "";
  }
}
