import { Route1RoutingModule } from './route1-routing.module';
import { Route1Component } from './route1.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations:[Route1Component],
    imports: [
        Route1RoutingModule
    ]
})
export class Route1Module
{
}