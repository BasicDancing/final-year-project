import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CinematographerComponent } from './cinematographer/cinematographer.component';
import { PhotographerComponent } from './photographer/photographer.component';
import { UserComponent } from './user.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { UserHomeComponent } from './user-home/user-home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ParlourComponent } from './parlour/parlour.component';
import { DecoratorComponent } from './decorator/decorator.component';
import { CateringComponent } from './catering/catering.component';
import { MusicianComponent } from './musician/musician.component';
import { VoiceArtistComponent } from './voice-artist/voice-artist.component';
import { DancerComponent } from './dancer/dancer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    UserComponent,
    CinematographerComponent,
    PhotographerComponent,
    UserDashboardComponent,
    UserHomeComponent,
    ParlourComponent,
    DecoratorComponent,
    CateringComponent,
    MusicianComponent,
    VoiceArtistComponent,
    DancerComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,

    //Bootstrap
    NgbModule,

    //Material UI
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatBadgeModule
  ],
})
export class UserModule { }
