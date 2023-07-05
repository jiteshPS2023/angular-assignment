import { TimerEvents } from './../../shared/enums/TimerEvents';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerLogsComponent } from './timer-logs.component';

describe('TimerLogsComponent', () => {
  let component: TimerLogsComponent;
  let fixture: ComponentFixture<TimerLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimerLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should increment started count', () => {
    component.eventName = TimerEvents.Started;
    component.ngOnChanges();
    expect(component.startedCount).toEqual(1);
  });
  it('should increment paused count', () => {
    component.eventName = TimerEvents.Paused;
    component.ngOnChanges();
    expect(component.pausedCount).toEqual(1);
  });
});
