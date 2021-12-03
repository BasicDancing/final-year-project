import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CateringComponent } from './catering/catering.component';
import { CinematographerComponent } from './cinematographer/cinematographer.component';
import { DancerComponent } from './dancer/dancer.component';
import { DecoratorComponent } from './decorator/decorator.component';
import { MusicianComponent } from './musician/musician.component';
import { ParlourComponent } from './parlour/parlour.component';
import { PhotographerComponent } from './photographer/photographer.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { VoiceArtistComponent } from './voice-artist/voice-artist.component';


const routes: Routes = [
  { path: 'home', component: UserHomeComponent },
  { path: 'navbar', component: UserNavbarComponent },
  { path: 'dashboard', component: UserDashboardComponent },
  { path: 'catering', component: CateringComponent },
  { path: 'decorator', component: DecoratorComponent },
  { path: 'parlour', component: ParlourComponent },
  { path: 'dancer', component: DancerComponent },
  { path: 'voice-artist', component: VoiceArtistComponent },
  { path: 'musician', component: MusicianComponent },
  { path: 'cinematographer', component: CinematographerComponent },
  { path: 'photographer', component: PhotographerComponent },
  { path: '', redirectTo: '/user/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
