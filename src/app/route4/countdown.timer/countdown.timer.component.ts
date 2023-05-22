import { timerService } from './../services/timer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown.timer.component.html',
  styleUrls: ['./countdown.timer.component.css']
})
export class CountdownTimerComponent implements OnInit {
  timerValue!: number;
  constructor(private service: timerService){
  }
  ngOnInit(): void {
    let timerObs = this.service.timerDetails.asObservable();
    timerObs.subscribe(det => this.timerValue = det.timerValue);
  }
}
