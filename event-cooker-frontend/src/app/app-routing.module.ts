import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotComponent } from './forgot/forgot.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { 
    path: 'user',
    loadChildren: () => import(`./user/user.module`).then(m => m.UserModule), 
    component: UserComponent 
  },
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'forgot', component: ForgotComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'sidenav', component: SidenavComponent},
  { path: 'header', component: HeaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
