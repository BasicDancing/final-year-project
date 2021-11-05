import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { EquipmentManagementComponent } from './equipment-management/equipment-management.component';
import { GeographyManagementComponent } from './geography-management/geography-management.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    AdminNavbarComponent,
    AdminSidenavComponent,
    EquipmentManagementComponent,
    GeographyManagementComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,

    //Material Ui
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
  ]
})
export class AdminModule { }
