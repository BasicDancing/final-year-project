import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { ProfileComponent } from '../shared/components/profile/profile.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent},
  { 
    path: 'user',
    loadChildren: () => import(`./user-management/user-management.module`).then(m => m.UserManagementModule), 
    component: UserManagementComponent 
  },
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
