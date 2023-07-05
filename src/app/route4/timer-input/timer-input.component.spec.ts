import { DatePipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TimerService } from '../services/Timer.service';

import { TimerInputComponent } from './timer-input.component';

describe('TimerInputComponent', () => {
  let component: TimerInputComponent;
  let fixture: ComponentFixture<TimerInputComponent>;
  let timerServiceSpy: any;

  beforeEach(async () => {
    timerServiceSpy = jasmine.createSpyObj('TimerService', ['startTimer']);
    await TestBed.configureTestingModule({
      declarations: [ TimerInputComponent ],
      providers: [
        {provide: TimerService, useValue: timerServiceSpy },
        DatePipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimerInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
