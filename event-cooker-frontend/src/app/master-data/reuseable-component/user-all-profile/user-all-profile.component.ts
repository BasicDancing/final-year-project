import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-all-profile',
  templateUrl: './user-all-profile.component.html',
  styleUrls: ['./user-all-profile.component.scss']
})
export class UserAllProfileComponent implements OnInit {

  @Input() users: Array<any>;
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
