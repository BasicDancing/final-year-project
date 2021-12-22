import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsComponent } from '../shared/components/jobs/jobs.component';
import { ProfileComponent } from '../shared/components/profile/profile.component';
import { ProfilesComponent } from '../shared/components/profiles/profiles.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  { path: 'jobs', component: JobsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profiles', component: ProfilesComponent },
  { path: 'home', component: UserHomeComponent },
  { path: 'dashboard', component: UserDashboardComponent },
  { path: '', redirectTo: '/user/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
