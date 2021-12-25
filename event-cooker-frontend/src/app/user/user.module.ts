import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { MatCardModule } from '@angular/material/card';
import { UserHomeComponent } from './user-home/user-home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { SelfComponent } from './self/self.component';

@NgModule({
  declarations: [
    UserComponent,
    UserHomeComponent,
    UserDashboardComponent,
    SelfComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,

    //Bootstrap
    NgbModule,

    //Material UI
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatBadgeModule
  ],
})
export class UserModule { }
