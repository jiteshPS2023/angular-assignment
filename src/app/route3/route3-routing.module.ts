import { NgModule } from '@angular/core';
import { Route3Component } from './route3.component';
import { Routes, RouterModule } from '@angular/router';

const route: Routes = [
    {path: '', component: Route3Component}
];
@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})
export class Route3RoutingModule{

}