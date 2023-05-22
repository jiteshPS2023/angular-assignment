import { timerService } from './../services/timer.service';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';

@Component({
  selector: 'app-timer-input',
  templateUrl: './timer.input.component.html',
  styleUrls: ['./timer.input.component.css']
})
export class TimerInputComponent implements OnInit {
  eventList: string[] = [];
  constructor(public datepipe: DatePipe, private service: timerService) {
  }
  ngOnInit() {
    let eventObs = this.service.eventDetails.asObservable();
    eventObs.subscribe(det => {
      take(1)
      if (det == "Reset")
        this.eventList = [];
      else {
        this.eventList.push(det + " at " + this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss'));
        if (this.eventList.length > 5) {
          this.eventList = this.eventList.slice(-5);
        }
      }
    });
  }
}