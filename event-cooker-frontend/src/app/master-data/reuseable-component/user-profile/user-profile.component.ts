import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user: any;

  constructor(private location: Location) { }

  ngOnInit(): void {
    this.user = this.location.getState();
    this.user = this.user.user;
    console.log(this.user.user);
  }

}
