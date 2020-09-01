import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ActivityLogsComponent } from './components/activity-logs/activity-logs.component';
import { BabiesComponent } from './components/babies/babies.component';
import { ActivitiesComponent } from './components/activities/activities.component';

const APP_ROUTER: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'activity_logs', component: ActivityLogsComponent  },
  { path: 'babies', component: BabiesComponent  },
  { path: 'activities', component: ActivitiesComponent  }
];

export const routing = RouterModule.forRoot(APP_ROUTER, { useHash: true});
