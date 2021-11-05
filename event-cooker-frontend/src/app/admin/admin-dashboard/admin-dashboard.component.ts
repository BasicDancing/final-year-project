import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  constructor() { }

  sideBarOpen = true;

  ngOnInit() {}
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
