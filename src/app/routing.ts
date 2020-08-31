import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ActivityLogsComponent } from './components/activity-logs/activity-logs.component';

const APP_ROUTER: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'activity_logs', component: ActivityLogsComponent  }
];

export const routing = RouterModule.forRoot(APP_ROUTER, { useHash: true});
