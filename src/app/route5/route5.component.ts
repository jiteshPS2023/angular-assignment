import { Route5Json } from './../shared/models/Route5Json';
import { Route5Service } from './services/route5.service';
import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
    selector: 'app-route5',
    templateUrl: './route5.component.html',
    styleUrls: ['./route5.component.css']
})
export class Route5Component implements OnInit {
    jsonData: Route5Json[] = [];
    initialData: Route5Json[] = [];
    sortType!: string;
    sortCol!: string;
    header!: string[];
    objValue = Object.values;

    constructor(private service: Route5Service) { }

    ngOnInit(): void {
        this.getJsonData();
    }
    getJsonData() {
        this.service.getRoute5Data().subscribe({
            next: (resp) => { this.processTableData(resp, '') },
            error: (e) => {throw e;},
            complete: () => console.log('Route5 data fetch complete!')
        });
    }
    processTableData(stdMarks: Route5Json[], sortCol: string) {
        Object.assign(this.jsonData, stdMarks);
        Object.assign(this.initialData, stdMarks);
        if (this.jsonData.length > 0) {
            this.header = Object.keys(this.jsonData[0]);
        }
        this.sortData(sortCol);

    }

    sortData(sortCol: string) {
        if (sortCol != '' && sortCol != undefined) {
            if(this.sortType == "asc" || this.sortType == "desc")
            {
                this.jsonData.sort((a, b) => {
                    if ((Object.values(a)[this.header.indexOf(sortCol)]
                        < Object.values(b)[this.header.indexOf(sortCol)] && this.sortType == "asc") 
                        || 
                        (Object.values(a)[this.header.indexOf(sortCol)]
                        > Object.values(b)[this.header.indexOf(sortCol)] && this.sortType == "desc")
                        ) {
                        return -1;
                    } else
                        return 1;
                });
            }
            else {
                Object.assign(this.jsonData, this.initialData);
            }
        } else {
            Object.assign(this.jsonData, this.initialData);
        }
    }

    changeSorting(sortIndex: number) {
        let sortCol = this.header[sortIndex]; 
        let resetSortType = false;

        if (this.sortCol == undefined || this.sortCol == "") {
            this.sortCol = sortCol;
        } else if (this.sortCol != sortCol) {
            resetSortType = true;
            this.sortCol = sortCol; 
        }
        if (!resetSortType) {
            if (this.sortType == undefined || this.sortType == "") {
                this.sortType = "asc";
            }
            else if (this.sortType == "asc") {
                this.sortType = "desc";
            }
            else if (this.sortType == "desc") {
                this.sortType = "";
            }
        } else
            this.sortType = "asc";

        this.sortData(this.sortCol);
    }
}
