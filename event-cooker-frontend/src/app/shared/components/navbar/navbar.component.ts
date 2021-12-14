import { Component, Input, OnInit } from '@angular/core';
import { NgbNavLink } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() navLinks: any;
  dropOptions: any;
  navOptions: any;

  constructor() { }

  ngOnInit(): void {
    this.dropOptions = this.navLinks.dropOptions;
    this.navOptions = this.navLinks.navOptions;
  }

}
