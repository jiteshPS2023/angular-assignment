import { NgModule } from '@angular/core';
import { Route4Component } from './route4.component';
import { Routes, RouterModule } from '@angular/router';

const route: Routes = [
    {path: '', component: Route4Component}
];
@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})
export class Route4RoutingModule{

}