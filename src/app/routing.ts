import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ActivityLogsComponent } from './components/activity-logs/activity-logs.component';
import { BabiesComponent } from './components/babies/babies.component';

const APP_ROUTER: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'activity_logs', component: ActivityLogsComponent  },
  { path: 'babies', component: BabiesComponent  }
];

export const routing = RouterModule.forRoot(APP_ROUTER, { useHash: true});
