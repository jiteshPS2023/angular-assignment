import { TimerEvents } from './../../shared/enums/TimerEvents';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerInputComponent } from './timer-input.component';
import { DatePipe } from '@angular/common';

describe('TimerInputComponent', () => {
  let component: TimerInputComponent;
  let fixture: ComponentFixture<TimerInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerInputComponent ],
      providers:[DatePipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimerInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should add event in list', () => {
    component.eventName = TimerEvents.Started;
    component.ngOnChanges();
    expect(component.eventList.length).toEqual(1);
  });
  it('should reset event list', () => {
    component.eventName = TimerEvents.Reset;
    component.ngOnChanges();
    expect(component.eventList.length).toEqual(0);
  });
});
