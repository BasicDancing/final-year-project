import { Component, NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HomeComponent } from '../home/home.component';
import { PhotographerComponent } from './photographer/photographer.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'photography', component: PhotographerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
