import { TimerService } from '../services/Timer.service';
import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { TimerEvents } from 'src/app/shared/enums/TimerEvents';

@Component({
  selector: 'app-timer-input',
  templateUrl: './timer-input.component.html',
  styleUrls: ['./timer-input.component.css']
})
export class TimerInputComponent implements OnInit, OnDestroy {
  eventList: string[] = [];
  currentEventName: string = "";
  subscriber: any;

  constructor(public datepipe: DatePipe, private service: TimerService) {
  }
  ngOnInit() {
    let timerObs = this.service.timerDetailsObs;
    this.subscriber = timerObs?.subscribe(det => {
      take(1)
      if (det.eventName == TimerEvents.Reset)
        this.eventList = [];
      else {
        if(this.currentEventName=="" || this.currentEventName!=det.eventName)
        {
          this.eventList.push(det.eventName + " at " + this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss'));
          if (this.eventList.length > 5) {
            this.eventList = this.eventList.slice(-5);
          }
          this.currentEventName = det.eventName;
        }
      }
    });
  }
  ngOnDestroy() {
    if (this.subscriber)
      this.subscriber.unsubscribe();
  }
  identify(index: number, item: string){
    return item; 
  }
}