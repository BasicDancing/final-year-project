import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CinematographerComponent } from './cinematographer/cinematographer.component';
import { PhotographerComponent } from './photographer/photographer.component';
import { UserComponent } from './user.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import {MatCardModule} from '@angular/material/card';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { UserHomeComponent } from './user-home/user-home.component';

@NgModule({
  declarations: [
    UserComponent,
    CinematographerComponent,
    PhotographerComponent,
    UserDashboardComponent,
    UserNavbarComponent,
    UserHomeComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,

    //Material UI
    MatCardModule,
  ]
})
export class UserModule { }
