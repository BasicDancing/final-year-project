import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { RatingsComponent } from './components/ratings/ratings.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { MatDividerModule } from '@angular/material/divider';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { JobFeedLeftComponent } from './components/job-feed-left/job-feed-left.component';
import { JobFeedMiddleComponent } from './components/job-feed-middle/job-feed-middle.component';
import { JobFeedRightComponent } from './components/job-feed-right/job-feed-right.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { EquipmentDetailsComponent } from './components/equipment-details/equipment-details.component';
import { MassagesComponent } from './components/massages/massages.component';
import { SettingsComponent } from './components/settings/settings.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ProfilesComponent,
    RatingsComponent,
    EquipmentComponent,
    NavbarComponent,
    DropdownComponent,
    SidenavComponent,
    JobsComponent,
    JobFeedLeftComponent,
    JobFeedMiddleComponent,
    JobFeedRightComponent,
    JobDetailsComponent,
    EquipmentDetailsComponent,
    MassagesComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,

    //Mat
    MatDividerModule,
  ],
  exports: [
    ProfileComponent,
    ProfilesComponent,
    RatingsComponent,
    EquipmentComponent,
    NavbarComponent,
    DropdownComponent,
    JobsComponent,
    JobFeedLeftComponent,
    JobFeedMiddleComponent,
    JobFeedRightComponent,
  ],
})
export class SharedModule { }
