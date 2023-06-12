import { TestBed, waitForAsync } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Route2Service } from "./route2.service";
import { Route2Json } from "src/app/shared/models/Route2Json";

describe('Route5Service', () => {
    let httpMock: HttpTestingController;
    let service: Route2Service;
    
    beforeEach(() => { 
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers:[
                Route2Service
            ]
          });

        service = TestBed.inject(Route2Service);
        httpMock = TestBed.get(HttpTestingController);
     });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    it('getRoute2Data is called', waitForAsync(() => {
        const sampleData = testData();

        service.getRoute2Data().subscribe((res) => {
            expect(res).toEqual(sampleData);
          });
        const req = httpMock.expectOne('../assets/data/route2.json');
        expect(req.request.method).toEqual("GET");
        req.flush(sampleData);
    
        httpMock.verify();
    }));
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
})