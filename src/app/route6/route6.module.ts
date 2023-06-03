import { NgModule } from '@angular/core';
import { Route6Component } from './route6.component';
import { Route6RoutingModule } from './route6-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[Route6Component],
    imports: [
        CommonModule,
        Route6RoutingModule
    ]
    
})
export class Route6Module
{
}