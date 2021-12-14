import { Component, OnInit } from '@angular/core';
import { dropOptions, DropOptions, NavLinks, navOptions, NavOptions } from '../master-data/dummy-data/admin-nav';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  dropOptions: DropOptions[] = dropOptions;
  navOptions: NavOptions[] = navOptions;
  navLinks: NavLinks = new NavLinks();

  constructor() { }

  sideBarOpen = true;

  ngOnInit() {
    this.navLinks.dropOptions = this.dropOptions;
    this.navLinks.navOptions = this.navOptions;
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
