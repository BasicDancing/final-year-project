import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { AdminComponent } from './admin.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
  { 
    path: 'user-management',
    loadChildren: () => import(`./user-management/user-management.module`).then(m => m.UserManagementModule), 
    component: UserManagementComponent 
  },
  { path: 'admin-dashboard', component: AdminDashboardComponent},
  { path: 'sidenav', component: AdminSidenavComponent},
  { path: 'navbar', component: AdminNavbarComponent},
  { path: '', redirectTo: '/admin/admin-dashboard', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
