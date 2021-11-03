import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinematographerComponent } from './cinematographer/cinematographer.component';
import { PhotographerComponent } from './photographer/photographer.component';
import { UserComponent } from './user.component';


const routes: Routes = [
  {

    path: '',
    component: UserComponent,
    children: [
      { path: '',   redirectTo: '/photographer', pathMatch: 'full' },
      {path: 'photographer', component: PhotographerComponent},
      {path: 'cinemetographer', component: CinematographerComponent},
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
