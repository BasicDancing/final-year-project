import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { PhotographerComponent } from './photographer/photographer.component';
import { CinematographerComponent } from './cinematographer/cinematographer.component';
import { UserManagementComponent } from './user-management.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';


@NgModule({
  declarations: [
    UserManagementComponent,
    PhotographerComponent,
    CinematographerComponent,
    UserDashboardComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule
  ]
})
export class UserManagementModule { }
