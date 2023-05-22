import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppErrorHandler } from './shared/handlers/AppErrorHandler';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AppErrorHandler,
    { provide: ErrorHandler, useClass: AppErrorHandler },
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
