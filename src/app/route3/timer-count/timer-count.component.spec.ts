import { CountdownDetails } from './../../shared/models/countdownDetails';
import { TimerEvents } from './../../shared/enums/TimerEvents';
import { DebugElement, EventEmitter } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TimerCountComponent } from './timer-count.component';
import { FormsModule } from '@angular/forms';

describe('TimerCountComponent Route3', () => {
  let component: TimerCountComponent;
  let fixture: ComponentFixture<TimerCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerCountComponent ],
      imports: [FormsModule]
    })
    .compileComponents();


    fixture = TestBed.createComponent(TimerCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create TimerCountComponent', () => {
    expect(component).toBeTruthy();
  });
  it('should start timer', (done) => {
    const input = fixture.debugElement.query(By.css('#inputTimer'));
    const inputEl = input.nativeElement;
    inputEl.value = '100';
    inputEl.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    let spyObj = spyOn(component.timerDetails, 'emit');

    let button = fixture.debugElement.query(By.css('.btn-primary'));
    button.nativeElement.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    fixture.whenStable().then(() => {  
      let det : CountdownDetails = {timerValue: 100,eventName: TimerEvents.Started};
      expect(spyObj).toHaveBeenCalledWith(det);
      done();
    });
  });
  
  it('should reset timer', (done) => {
    let spyObj = spyOn(component.timerDetails, 'emit');
    
    let button = fixture.debugElement.query(By.css('.btn-secondary'));
    button.nativeElement.dispatchEvent(new Event('click'));
    
    fixture.detectChanges();

    fixture.whenStable().then(() => {  
      let det : CountdownDetails = {timerValue: 0,eventName: TimerEvents.Reset};
      expect(spyObj).toHaveBeenCalledWith(det);
      done();
    });
  });
});

