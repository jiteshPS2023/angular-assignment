import { HttpClient } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { Route5Json } from '../shared/models/Route5Json';

import { Route5Component } from './route5.component';
import { Route5Module } from './route5.module';
import { Route5Service } from './services/route5.service';

describe('Route5Component', () => {
  let component: Route5Component;
  let fixture: ComponentFixture<Route5Component>;
  let routeServiceSpy: any;
  
  beforeEach(async () => {
    routeServiceSpy = jasmine.createSpyObj('Route5Service', ['getRoute5Data']);

    await TestBed.configureTestingModule({
      imports: [Route5Module],
      declarations: [ Route5Component ],
      providers:[
        {provide: Route5Service, useValue: routeServiceSpy },
        HttpClient
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(Route5Component);
      component = fixture.componentInstance;
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('service should return data', fakeAsync(() => {
    routeServiceSpy.getRoute5Data.and.returnValue(of(testData()));
    let subSpy = spyOn(routeServiceSpy.getRoute5Data(), 'subscribe');
    component.ngOnInit();
    tick();
    fixture.detectChanges();
    expect(subSpy).toHaveBeenCalled();
  }));
  it('should process table data', () => {
    component.processTableData(testData(), '');
    expect(component.jsonData).toEqual(testData());
  });
  it('should sort table data', () => {
    component.processTableData(testData(), '');
    component.changeSorting(0);
    expect(component.jsonData).toEqual(
      testData().sort((a, b) => 
      {
        if(a.Name< b.Name)
          return -1;
        else
          return 1;
      }
    ));
  });
});

function testData(): Route5Json[]{
  const data: any =[
    {
      "Name": "Jitesh",
      "Class": 9,
      "Section": "A",
      "Sub1": 70,
      "Sub2": 75,
      "Sub3": 80,
      "Sub4": 85
  },
  {
      "Name": "Tanuja",
      "Class": 12,
      "Section": "D",
      "Sub1": 80,
      "Sub2": 85,
      "Sub3": 95,
      "Sub4": 96
  },
  {
      "Name": "Shri",
      "Class": 11,
      "Section": "C",
      "Sub1": 77,
      "Sub2": 82,
      "Sub3": 87,
      "Sub4": 90
  },
  {
      "Name": "Spadigha",
      "Class": 10,
      "Section": "B",
      "Sub1": 75,
      "Sub2": 80,
      "Sub3": 85,
      "Sub4": 88
  }];
    return Object.values(data) as Route5Json[];
}