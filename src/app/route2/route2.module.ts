import { Route2Service } from './route2.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Route2Component } from './route2.component';
import { Route2RoutingModule } from './route2-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[Route2Component],
    imports: [
        CommonModule,
        RouterModule,
        Route2RoutingModule
    ],
    providers: [ Route2Service]
})
export class Route2Module
{

}