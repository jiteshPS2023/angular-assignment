import { Route2Json } from './../shared/models/Route2Json';
import { HttpClient } from '@angular/common/http';
import { Route2Module } from './route2.module';
import { Route2Service } from './route2.service';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { Route2Component } from './route2.component';
import { of } from 'rxjs';

describe('Route2Component', () => {
  let component: Route2Component;
  let routeServiceSpy: any;
  let fixture: ComponentFixture<Route2Component>;

  beforeEach(async () => {
    routeServiceSpy = jasmine.createSpyObj('Route2Service', ['getRoute2Data']);

    await TestBed.configureTestingModule({
      imports: [Route2Module],
      declarations: [ Route2Component ],
      providers:[
        {provide: Route2Service, useValue: routeServiceSpy },
        HttpClient
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(Route2Component);
      component = fixture.componentInstance;
    });

  });
  it('should sort data', () => {
    component.showHtml(testData());
    component.sortData('asc');
    expect(component.sortType).toEqual("asc");
    expect(component.jsonData).toEqual(testData());
  });
    
  it('should change view type', () => {
    component.changeViewType('grid');
    expect(component.viewType).toEqual("grid");
  });

  it('service should return data', fakeAsync(() => {
      routeServiceSpy.getRoute2Data.and.returnValue(of(testData()));
      let subSpy = spyOn(routeServiceSpy.getRoute2Data(), 'subscribe');
      component.ngOnInit();
      tick();
      expect(subSpy).toHaveBeenCalled();
  }));

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});

function testData(): Route2Json[]{
  const data: any =[
    {
        "title": "Card title 1",
        "description": "Some quick example text to build on the card title and make up the bulk of the card's content.",
        "buttonText": "Go somewhere",
        "price": 100
    },
    {
        "title": "Card title 2",
        "description": "Some quick example text to build on the card title and make up the bulk of the card's content.",
        "buttonText": "Go somewhere",
        "price": 200
    }];
    return Object.values(data) as Route2Json[];
}
