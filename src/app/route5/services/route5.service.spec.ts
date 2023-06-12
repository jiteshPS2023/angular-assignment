import { Route5Service } from './route5.service';
import { TestBed, waitForAsync } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Route5Json } from 'src/app/shared/models/Route5Json';

describe('Route5Service', () => {
    let httpMock: HttpTestingController;
    let service: Route5Service;
    
    beforeEach(() => { 
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers:[
                Route5Service
            ]
          });

        service = TestBed.inject(Route5Service);
        httpMock = TestBed.get(HttpTestingController);

     });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    it('getRoute5Data is called', waitForAsync(() => {
        const sampleData = testData();

        service.getRoute5Data().subscribe((res) => {
            expect(res).toEqual(sampleData);
          });
        const req = httpMock.expectOne('../assets/data/route5.json');
        expect(req.request.method).toEqual("GET");
        req.flush(sampleData);
    
        httpMock.verify();
    }));
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
})