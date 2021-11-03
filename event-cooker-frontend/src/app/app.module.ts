import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DashboardComponent,
    HomeComponent,
    HeaderComponent,
    SidenavComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    CommonModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppComponent]
})
export class AppModule { }
