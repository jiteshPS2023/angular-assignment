import { timerService } from './services/timer.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Route4Component } from './route4.component';
import { Route4RoutingModule } from './route4-routing.module';
import { CountdownTimerComponent } from './countdown.timer/countdown.timer.component';
import { TimerInputComponent } from './timer.input/timer.input.component';
import { TimerLogsComponent } from './timer.logs/timer.logs.component';
import { TimerCountComponent } from './timer.count/timer.count.component';
import { CommonModule, DatePipe } from '@angular/common';

@NgModule({
    declarations:[Route4Component, CountdownTimerComponent, TimerInputComponent, TimerLogsComponent, TimerCountComponent],
    imports: [
        CommonModule,
        RouterModule,
        Route4RoutingModule
    ], 
    providers: [DatePipe, timerService]
})
export class Route4Module
{
}