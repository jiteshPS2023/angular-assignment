import { NgModule } from '@angular/core';
import { Route2Component } from './route2.component';
import { Routes, RouterModule } from '@angular/router';

const route: Routes = [
    {path: '', component: Route2Component}
];
@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})
export class Route2RoutingModule{

}