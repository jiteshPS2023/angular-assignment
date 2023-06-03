import { TimerService } from '../services/Timer.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  timerValue!: number;
  timerSubscriber: any;
  constructor(private service: TimerService){
  }
  ngOnInit(): void {
    let timerObs = this.service.timerDetailsObs;
    this.timerSubscriber = timerObs?.subscribe(det => this.timerValue = det.timerValue);
  }
  ngOnDestroy(){
    this.timerSubscriber.unsubscribe();
  }
}
