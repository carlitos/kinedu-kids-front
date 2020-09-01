import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

// Routes
import { routing } from './routing';
import { ActivityLogsComponent } from './components/activity-logs/activity-logs.component';
import { BabiesComponent } from './components/babies/babies.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivityLogsComponent,
    BabiesComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
