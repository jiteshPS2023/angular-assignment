import { Component, OnInit } from '@angular/core';
import { timerService } from '../services/timer.service';

@Component({
  selector: 'app-timer-logs',
  templateUrl: './timer.logs.component.html',
  styleUrls: ['./timer.logs.component.css']
})
export class TimerLogsComponent implements OnInit {
  startedCount: number=0;
  pausedCount: number =0 ;

  constructor(private service: timerService) {
  }
  ngOnInit() {
    let eventObs = this.service.eventDetails.asObservable();
    eventObs.subscribe(det => {
      if (det != undefined && det != "") {
        if (det == "Started")
          this.startedCount++;
        else if (det == "Paused"){
          this.pausedCount++;
        }else
        {
          this.startedCount=0;
          this.pausedCount=0;
        }
      } else {
        this.startedCount=0;
        this.pausedCount=0;
      }
    });
  }
}
