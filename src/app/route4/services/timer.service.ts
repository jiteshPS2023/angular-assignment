import { Injectable } from '@angular/core';
import { TimerEvents } from '../../shared/enums/TimerEvents';
import { interval, Observable, Subject } from "rxjs";
import { CountdownDetails } from '../../shared/models/countdownDetails';

@Injectable()
export class TimerService
{
    timerDetails = new Subject<CountdownDetails>();
    timerDetailsObs?: Observable<CountdownDetails>;
    interval: any;
    currentTimervalue!: number;

    constructor(){
      this.timerDetailsObs = this.timerDetails.asObservable();
    }

    startTimer(timerValue: number, eventName: string) {
        if(timerValue)
        {
          if(this.currentTimervalue &&  this.currentTimervalue< timerValue && this.currentTimervalue != 0)
            timerValue = this.currentTimervalue;
        
          let det : CountdownDetails = {timerValue: timerValue, eventName: eventName};
          this.currentTimervalue = timerValue;
          this.timerDetails.next(det);
          console.log('Starting timer');
          const interval$ = interval(1000); 
          this.interval =  interval$.subscribe(val => 
              {
                if(this.currentTimervalue>0) {
                  det.timerValue--;
                  this.timerDetails.next(det);
                } else {
                  det.timerValue = 0;
                  let completed : CountdownDetails = {timerValue: 0, eventName: TimerEvents.Completed};
                  this.timerDetails.next(completed);
                  this.interval.unsubscribe();
                }
                this.currentTimervalue = det.timerValue;
              }
            );
        }
    }

    pauseTimer(eventName: string){
        console.log('Pausing timer');
        this.interval.unsubscribe();
        let det : CountdownDetails = {timerValue: this.currentTimervalue, eventName: eventName};
        this.timerDetails.next(det);
    }
    resetTimer(eventName: string){
        console.log('Reseting timer');
        this.interval.unsubscribe();
        this.currentTimervalue =0;
        let det : CountdownDetails = {timerValue: this.currentTimervalue, eventName: eventName};
        this.timerDetails.next(det);
    }
}