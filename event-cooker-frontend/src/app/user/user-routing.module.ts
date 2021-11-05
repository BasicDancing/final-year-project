import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinematographerComponent } from './cinematographer/cinematographer.component';
import { PhotographerComponent } from './photographer/photographer.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';


const routes: Routes = [
  { path: 'user-dashboard', component: UserDashboardComponent },
  { path: 'photographer', component: PhotographerComponent },
  { path: 'cinematographer', component: CinematographerComponent },
  { path: '', redirectTo: '/user/user-dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
