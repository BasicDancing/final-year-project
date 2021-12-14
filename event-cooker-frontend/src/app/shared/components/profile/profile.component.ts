import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: any;

  constructor(private location: Location) { }

  ngOnInit(): void {
    this.user = this.location.getState();
    this.user = this.user.user;
    console.log(this.user.user);
  }
}
