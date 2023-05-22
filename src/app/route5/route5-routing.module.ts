import { NgModule } from '@angular/core';
import { Route5Component } from './route5.component';
import { Routes, RouterModule } from '@angular/router';

const route: Routes = [
    {path: '', component: Route5Component}
];
@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})
export class Route5RoutingModule{

}