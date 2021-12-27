import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';
import { PostComponent } from './post/post.component';
import { MatButtonModule } from '@angular/material/button';import { UserManageComponent } from './user-manage/user-manage.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    AdminSidenavComponent,
    PostComponent,
    UserManageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,

    //Material Ui
    MatCardModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class AdminModule { }
