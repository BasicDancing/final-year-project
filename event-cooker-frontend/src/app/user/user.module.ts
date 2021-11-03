import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CinematographerComponent } from './cinematographer/cinematographer.component';
import { PhotographerComponent } from './photographer/photographer.component';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    UserComponent,
    CinematographerComponent,
    PhotographerComponent,
  ],
  imports: [
    NgbModule,
    CommonModule,
    UserRoutingModule,
    RouterModule.forChild([]),
    BrowserModule,

  ]
})
export class UserModule { }
