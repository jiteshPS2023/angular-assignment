import { Component } from '@angular/core';
import { countdownDetails } from './models/countdownDetails';

@Component({
  selector: 'app-route3',
  templateUrl: './route3.component.html',
  styleUrls: ['./route3.component.css']
})
export class Route3Component {
  countdownDet = new countdownDetails(0, "");

  startTimer(det: countdownDetails){
    this.countdownDet.eventName=det.eventName;
    this.countdownDet.timerValue=det.timerValue;
  }
}
