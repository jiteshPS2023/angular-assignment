import { NgModule } from '@angular/core';
import { Route3Component } from './route3.component';
import { Route3RoutingModule } from './route3-routing.module';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { TimerInputComponent } from './timer-input/timer-input.component';
import { TimerLogsComponent } from './timer-logs/timer-logs.component';
import { TimerCountComponent } from './timer-count/timer-count.component';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations:[Route3Component, CountdownTimerComponent, TimerInputComponent, TimerLogsComponent, TimerCountComponent],
    imports: [
        CommonModule,
        Route3RoutingModule,
        DatePipe,
        FormsModule
    ],
    providers:[DatePipe]
})
export class Route3Module
{
}