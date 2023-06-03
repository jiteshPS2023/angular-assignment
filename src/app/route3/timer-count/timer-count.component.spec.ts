import { TimerEvents } from './../../shared/enums/TimerEvents';
import { DebugElement, EventEmitter } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TimerCountComponent } from './timer-count.component';
import { CountdownDetails } from 'src/app/shared/models/countdownDetails';

describe('TimerCountComponent Route3', () => {
  let component: TimerCountComponent;
  let fixture: ComponentFixture<TimerCountComponent>;

  // let startBtn: DebugElement;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerCountComponent ]
    })
    .compileComponents();

    // startBtn = fixture.debugElement.query(By.css('btn btn-primary'));
    fixture = TestBed.createComponent(TimerCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Start/Pause Timer', () => {
    component.startPauseTimer();
    expect(component.eventName).toEqual(TimerEvents.Started);
    component.timerDetails.subscribe((value: CountdownDetails) => {
      expect(value.timerValue).toBe(100);
      expect(value.eventName).toBe(TimerEvents.Paused);
    });

    // startBtn.triggerEventHandler('click', null);

    // let eventSpy = spyOn(component.timerDetails, 'emit');
    // fixture.detectChanges();

    // expect(eventSpy).toHaveBeenCalledWith(new countdownDetails(100, "Started"));
    
    // component.startPauseTimer(100);
    expect(component.eventName).toEqual(TimerEvents.Paused);
    let det : CountdownDetails = {timerValue: 100, eventName: "Paused"};
    expect(component.timerDetails.emit).toHaveBeenCalledWith(det);
  });
});
