import { TimerEvents } from './../../shared/enums/TimerEvents';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TimerService } from '../services/Timer.service';

@Component({
  selector: 'app-timer-logs',
  templateUrl: './timer-logs.component.html',
  styleUrls: ['./timer-logs.component.css']
})
export class TimerLogsComponent implements OnInit, OnDestroy {
  startedCount: number=0;
  pausedCount: number =0 ;
  currentEventName: string= "";
  subscriber: any;

  constructor(private service: TimerService) {
  }
  ngOnInit() {
    let eventObs = this.service.timerDetailsObs;
    this.subscriber = eventObs?.subscribe(det => {
      if (det) {        
        if(this.currentEventName == "" || this.currentEventName != det.eventName)
        {
          if (det.eventName == TimerEvents.Started)
            this.startedCount++;
          else if (det.eventName == TimerEvents.Paused){
            this.pausedCount++;
          }else
          {
            this.startedCount=0;
            this.pausedCount=0;
          }
          this.currentEventName = det.eventName;
        }
      } else {
        this.startedCount=0;
        this.pausedCount=0;
      }
    });
  }
  ngOnDestroy(){
    this.subscriber.unsubscribe();
  }
}
