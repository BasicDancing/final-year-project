import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinematographerComponent } from './cinematographer/cinematographer.component';
import { PhotographerComponent } from './photographer/photographer.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';


const routes: Routes = [
  { path: 'home', component: UserHomeComponent },
  { path: 'navbar', component: UserNavbarComponent },
  { path: 'dashboard', component: UserDashboardComponent },
  { path: 'photographer', component: PhotographerComponent },
  { path: 'cinematographer', component: CinematographerComponent },
  { path: '', redirectTo: '/user/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
