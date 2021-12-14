import { Component, OnInit } from '@angular/core';
import { dropOptions, DropOptions, NavLinks, navOptions, NavOptions } from '../master-data/dummy-data/user-nav';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  dropOptions: DropOptions[] = dropOptions;
  navOptions: NavOptions[] = navOptions;
  navLinks: NavLinks = new NavLinks();


  constructor() { }

  ngOnInit(): void {
    this.navLinks.dropOptions = this.dropOptions;
    this.navLinks.navOptions = this.navOptions;
  }

}
