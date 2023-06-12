import { HttpClient } from "@angular/common/http";
import {Route2Json} from "../../shared/models/Route2Json";
import { Injectable } from '@angular/core';

@Injectable()
export class Route2Service{
    constructor(private http: HttpClient){
  
    }
    getRoute2Data(){
        return this.http.get<Route2Json[]>('../assets/data/route2.json');
    }
}