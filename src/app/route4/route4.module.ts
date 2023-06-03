import { TimerService } from './services/Timer.service';
import { NgModule } from '@angular/core';
import { Route4Component } from './route4.component';
import { Route4RoutingModule } from './route4-routing.module';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { TimerInputComponent } from './timer-input/timer-input.component';
import { TimerLogsComponent } from './timer-logs/timer-logs.component';
import { TimerCountComponent } from './timer-count/timer-count.component';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations:[Route4Component, CountdownTimerComponent, TimerInputComponent, TimerLogsComponent, TimerCountComponent],
    imports: [
        CommonModule,
        Route4RoutingModule,
        FormsModule
    ], 
    providers: [DatePipe, TimerService]
})
export class Route4Module
{
}