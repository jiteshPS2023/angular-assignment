import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Route5Json } from "src/app/shared/models/Route5Json";

@Injectable()
export class Route5Service
{
    constructor(private http: HttpClient){
  
    }
    getRoute5Data(){
        return this.http.get<Route5Json[]>('../assets/data/route5.json');
    }
}