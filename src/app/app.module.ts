import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

// Routes
import { routing } from './routing';
import { ActivityLogsComponent } from './components/activity-logs/activity-logs.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivityLogsComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
