import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-timer-logs',
  templateUrl: './timer.logs.component.html',
  styleUrls: ['./timer.logs.component.css']
})
export class TimerLogsComponent implements OnChanges {
  @Input() eventName!: string;
  startedCount: number=0;
  pausedCount: number =0 ;

  ngOnChanges() {
    if (this.eventName != undefined && this.eventName != "") {
      if (this.eventName == "Started")
        this.startedCount++;
      else if (this.eventName == "Paused"){
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
  }
}
