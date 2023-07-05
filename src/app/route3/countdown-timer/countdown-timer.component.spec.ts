import { TimerEvents } from './../../shared/enums/TimerEvents';
import { ComponentFixture, discardPeriodicTasks, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';

import { CountdownTimerComponent } from './countdown-timer.component';
import { CountdownDetails } from 'src/app/shared/models/countdownDetails';

describe('CountdownTimerComponent', () => {
  let component: CountdownTimerComponent;
  let fixture: ComponentFixture<CountdownTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownTimerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountdownTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start timer', fakeAsync(() => {
    let spyObj = spyOn(component.timerDetails, 'emit');

    component.eventName=TimerEvents.Started;
    component.timerValue= 5;
    let clearInterval = spyOn(component, 'clearTimerInterval');

    component.ngOnChanges();
    expect(clearInterval).not.toHaveBeenCalled();

    tick(6000);
    discardPeriodicTasks();
    fixture.detectChanges();
    fixture.whenStable().then(() => {  
      expect(clearInterval).toHaveBeenCalled();
      let det : CountdownDetails = {timerValue: 0,eventName: TimerEvents.Completed};
      expect(spyObj).toHaveBeenCalledWith(det);
    });
  }));

  it('should pause timer', fakeAsync(() => {
    let clearInterval = spyOn(component, 'clearTimerInterval');
    
    component.pauseTimer();

    fixture.detectChanges();

    fixture.whenStable().then(() => {  
      expect(clearInterval).toHaveBeenCalled();
    });
  }));
});
