import { TimerEvents } from './../shared/enums/TimerEvents';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Route3Component } from './route3.component';
import { Route3Module } from './route3.module';

describe('Route3Component', () => {
  let component: Route3Component;
  let fixture: ComponentFixture<Route3Component>;

  // UI element
  let startBtn: DebugElement;
  let resetBtn: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule(
      {
        imports: [Route3Module],
        declarations: [ Route3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Route3Component);
    component = fixture.componentInstance;

    startBtn = fixture.debugElement.query(By.css('btn btn-primary'));
    resetBtn = fixture.debugElement.query(By.css('btn btn-secondary'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
