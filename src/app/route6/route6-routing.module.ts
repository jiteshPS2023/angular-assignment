import { NgModule } from '@angular/core';
import { Route6Component } from './route6.component';
import { Routes, RouterModule } from '@angular/router';

const route: Routes = [
    {path: '', component: Route6Component}
];
@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})
export class Route6RoutingModule{

}