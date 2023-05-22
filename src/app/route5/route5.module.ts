import { Route5Service } from './services/route5.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Route5Component } from './route5.component';
import { Route5RoutingModule } from './route5-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[Route5Component],
    imports: [
        CommonModule,
        RouterModule,
        Route5RoutingModule
    ],
    providers:[Route5Service]
})
export class Route5Module
{
}