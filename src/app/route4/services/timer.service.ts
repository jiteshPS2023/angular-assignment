import { Subject } from "rxjs";
import { countdownDetails } from "../models/countdownDetails";

export class timerService
{
    timerDetails = new Subject<countdownDetails>();
    eventDetails = new Subject<string>();
    interval: any;
    currentTimervalue!: number;

    startTimer(timerValue: number, eventName: string) {
        if(timerValue > 0 && this.currentTimervalue>0 &&  this.currentTimervalue< timerValue)
            timerValue = this.currentTimervalue;

        let det = new countdownDetails(timerValue, eventName);
        this.eventDetails.next("Started");
        console.log('Starting timer');
        this.interval = setInterval(() => {
          if(timerValue > 0) {
            this.timerDetails.next(det);
            det.timerValue--;
          } else {
            det.timerValue = 0;
            // this.timerDetails.complete();
          }
          this.currentTimervalue = det.timerValue;
        },1000)
    }

    pauseTimer(eventName: string){
        this.eventDetails.next("Paused");
        console.log('Pausing timer');
        clearInterval(this.interval);
        let det = new countdownDetails(this.currentTimervalue, eventName);
        this.timerDetails.next(det);
        // this.timerDetails.complete();
    }
    resetTimer(eventName: string){
        this.eventDetails.next("Reset");
        console.log('Reseting timer');
        clearInterval(this.interval);
        this.currentTimervalue =0;
        let det = new countdownDetails(this.currentTimervalue, eventName);
        this.timerDetails.next(det);
        // this.timerDetails.complete();
    }
}