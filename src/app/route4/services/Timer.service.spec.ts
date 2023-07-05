import { TimerEvents } from 'src/app/shared/enums/TimerEvents';
import { TestBed } from "@angular/core/testing";
import { TimerService } from "./Timer.service";
import { CountdownDetails } from 'src/app/shared/models/countdownDetails';

describe('TimerService', () => {
    let service: TimerService;
    beforeEach(() => { 
        TestBed.configureTestingModule({ providers: [TimerService] });
        service = TestBed.inject(TimerService);
     });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    it('startTimer is called', () => {
        service.timerDetailsObs?.subscribe(det => {
            let countdownDet : CountdownDetails = {timerValue: 5, eventName: TimerEvents.Started};
            expect(det).toEqual(countdownDet);
        });
        service.startTimer(5, TimerEvents.Started);
    });

    it('pauseTimer is called', () => {
        service.startTimer(5, TimerEvents.Started);
        service.timerDetailsObs?.subscribe(det => {
            let countdownDet : CountdownDetails = {timerValue: 5, eventName: TimerEvents.Paused};
            expect(det).toEqual(countdownDet);
        });
        service.pauseTimer(TimerEvents.Paused);
    });

    
    it('resetTimer is called', () => {
        service.timerDetailsObs?.subscribe(det => {
            let countdownDet : CountdownDetails = {timerValue: 0, eventName: TimerEvents.Reset};
            expect(det).toEqual(countdownDet);
        });
        service.resetTimer(TimerEvents.Reset);
    });
})