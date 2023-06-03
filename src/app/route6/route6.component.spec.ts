import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Route6Component } from './route6.component';

describe('Route6Component', () => {
  let component: Route6Component;
  let fixture: ComponentFixture<Route6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Route6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Route6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should click button', waitForAsync(() => {
    spyOn(component, 'showAlert');
  
    let button = fixture.debugElement.query(By.css('button[data-count="10"]'));
    button.nativeElement.click();
  
    fixture.whenStable().then(() => {
      expect(component.showAlert).toHaveBeenCalled();
    });
  }));
  
});
