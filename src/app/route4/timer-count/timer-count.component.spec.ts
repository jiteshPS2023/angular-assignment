import { TimerService } from './../services/Timer.service';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TimerCountComponent } from './timer-count.component';
import { CountdownDetails } from 'src/app/shared/models/countdownDetails';
import { TimerEvents } from 'src/app/shared/enums/TimerEvents';
import { FormsModule } from '@angular/forms';

describe('TimerCountComponent', () => {
  let component: TimerCountComponent;
  let fixture: ComponentFixture<TimerCountComponent>;
  let timerServiceSpy: any;

  beforeEach(async () => {
    // timerServiceSpy = jasmine.createSpyObj('TimerService', ['startTimer']);
    timerServiceSpy = jasmine.createSpyObj('TimerService', ['startTimer', 'pauseTimer', 'resetTimer'], 
    ['timerDetailsObs']);
    await TestBed.configureTestingModule({
      declarations: [ TimerCountComponent ],
      providers: [
        {provide: TimerService, useValue: timerServiceSpy },
      ],
      imports: [FormsModule]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(TimerCountComponent);
      component = fixture.componentInstance;
      component.showError="false";
    });
  });

  it('should create', () => {
    const content = fixture.debugElement.nativeElement.querySelector('div');
    console.log( 'Html content ' +content.innerHtml);
    expect(component).toBeTruthy();
  });

  it('should start timer', fakeAsync(() => {
    component.inputTimer="5";
    tick(); 
    fixture.detectChanges();

    let button = fixture.debugElement.query(By.css('.btn-primary'));    
    button.nativeElement.click();
    fixture.detectChanges();
    spyOn(component, 'startPauseTimer').and.callThrough();

    expect(timerServiceSpy.startTimer).toHaveBeenCalled();
  }));
  
  it('should reset timer', () => {
    let button = fixture.debugElement.query(By.css('.btn-secondary'));
    button.nativeElement.click();
    fixture.detectChanges();
    spyOn(component, 'resetTimer').and.callThrough();

    fixture.detectChanges();

    expect(timerServiceSpy.resetTimer).toHaveBeenCalled();
  });
});
