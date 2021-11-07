import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinematographerComponent } from './cinematographer/cinematographer.component';
import { PhotographerComponent } from './photographer/photographer.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserManagementComponent } from './user-management.component';

const routes: Routes = [
  { path: 'photographer', component: PhotographerComponent },
  { path: 'cinematographer', component: CinematographerComponent },
  { path: 'dashboard', component: UserDashboardComponent },
  { path: '', redirectTo: '/admin/user/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
