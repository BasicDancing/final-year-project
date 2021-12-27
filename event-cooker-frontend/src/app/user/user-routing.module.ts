import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsComponent } from '../shared/components/jobs/jobs.component';
import { MessageComponent } from '../shared/components/message/message.component';
import { NotificationComponent } from '../shared/components/notification/notification.component';
import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';
import { PostComponent } from '../shared/components/post/post.component';
import { ProfileComponent } from '../shared/components/profile/profile.component';
import { ProfilesComponent } from '../shared/components/profiles/profiles.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  { path: 'notification', component: NotificationComponent},
  { path: 'message', component: MessageComponent },
  { path: 'post', component: PostComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profiles', component: ProfilesComponent },
  { path: 'home', component: UserHomeComponent },
  { path: 'dashboard', component: UserDashboardComponent },
  { path: '', redirectTo: '/user/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
