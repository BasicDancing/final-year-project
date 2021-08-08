import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CameraManComponent } from './camera-man/camera-man.component';
import { PhotographerComponent } from './photographer/photographer.component';
import { CinemetographerComponent } from './cinemetographer/cinemetographer.component';


@NgModule({
  declarations: [
    CameraManComponent,
    PhotographerComponent,
    CinemetographerComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
