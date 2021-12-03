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
  items = ['a', 'b', 'c', 'd', 'e', 'f'];
}
