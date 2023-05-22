import { Route1Component } from './route1.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
const routes: Routes = [
    {
        path:'',
        component: Route1Component
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Route1RoutingModule{
}