import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';
import { ProfileComponent } from '../shared/components/profile/profile.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { PostComponent } from './post/post.component';
import { UserManageComponent } from './user-manage/user-manage.component';

const routes: Routes = [
  { path: 'user', component: UserManageComponent},
  { path: 'post', component: PostComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'dashboard', component: AdminDashboardComponent},
  { path: 'sidenav', component: AdminSidenavComponent},
  //{ path: 'navbar', component: NavbarComponent},
  { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
