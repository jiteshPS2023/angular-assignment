import { TimerEvents } from './../../shared/enums/TimerEvents';
import { DatePipe } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-timer-input',
  templateUrl: './timer-input.component.html',
  styleUrls: ['./timer-input.component.css']
})
export class TimerInputComponent implements OnChanges {
  @Input() eventName!: string;
  eventList: string[] = [];
  constructor(public datepipe: DatePipe) {

  }
  ngOnChanges() {
    if (this.eventName) {
      if (this.eventName == TimerEvents.Reset)
        this.eventList = [];
      else {
        this.eventList.push(this.eventName + " at " + this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss'));
        if (this.eventList.length > 5) {
          this.eventList = this.eventList.slice(-5);
        }
      }
    } else {
      this.eventList = [];
    }
  }
  identify(index: number, item: string){
    return item; 
  }

}