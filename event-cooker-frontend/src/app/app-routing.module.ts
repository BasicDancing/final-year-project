import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ForgotComponent } from './forgot/forgot.component';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './master-data/reuseable-component/user-profile/user-profile.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { 
    path: 'user',
    loadChildren: () => import(`./user/user.module`).then(m => m.UserModule), 
    component: UserComponent 
  },
  { 
    path: 'admin',
    loadChildren: () => import(`./admin/admin.module`).then(m => m.AdminModule), 
    component: AdminComponent 
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'forgot', component: ForgotComponent},
  { path: 'home', component: HomeComponent },
  { path: 'services', component: HomeComponent },
  { path: 'details', component: HomeComponent },
  { path: 'jobs', component: JobsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
