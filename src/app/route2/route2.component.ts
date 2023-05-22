import { AppErrorHandler } from './../shared/handlers/AppErrorHandler';
import { Route2Json } from './../shared/models/Route2Json';
import { Route2Service } from './route2.service';
import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.css']
})
export class Route2Component implements OnInit {
  sortType: string = "asc";
  viewType: string = "grid";
  jsonData: Route2Json[] = [];
  errorHandler = new  AppErrorHandler();
  constructor(private service: Route2Service)
  {

  }
  ngOnInit(){
    this.getJsonData();
  }
  getJsonData(){
    this.service.getRoute2Data().subscribe({
      next: (resp) => {this.showHtml(resp)},
      error: (e) => throwError(()=> {this.errorHandler.handleError(e)}),
      complete: () => console.log('Route2 data fetch complete!')
    });
  }
  showHtml(data: Route2Json[]){
    this.jsonData= data;
    console.log("json Data: "+this.jsonData);
    this.sortData("asc");
  }
  sortData(sortType: string) {
    this.sortType = sortType;
    if(this.sortType=="asc")
    {
      this.jsonData.sort(function(a, b){
            return a.price - b.price;
        });
    }else if(this.sortType=="desc")
          {
            this.jsonData.sort(function(a, b){
          return b.price - a.price;
        });
      }
  }
  changeViewType(viewType: string){
    this.viewType = viewType;
  }
}