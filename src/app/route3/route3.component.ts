import { Component } from '@angular/core';
import { CountdownDetails } from '../shared/models/countdownDetails';

@Component({
  selector: 'app-route3',
  templateUrl: './route3.component.html',
  styleUrls: ['./route3.component.css']
})
export class Route3Component {
  countdownDet : CountdownDetails = {timerValue: 0, eventName: ""};

  updateTimer(det: CountdownDetails){
    this.countdownDet.eventName=det.eventName;
    this.countdownDet.timerValue=det.timerValue;
  }
}
