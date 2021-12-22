import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../shared/components/profile/profile.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent},
   { path: 'dashboard', component: AdminDashboardComponent},
  { path: 'sidenav', component: AdminSidenavComponent},
  //{ path: 'navbar', component: NavbarComponent},
  { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
