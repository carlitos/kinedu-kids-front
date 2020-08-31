import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const APP_ROUTER: Routes = [
  { path: '', component: HomeComponent  },
];

export const routing = RouterModule.forRoot(APP_ROUTER, { useHash: true});
