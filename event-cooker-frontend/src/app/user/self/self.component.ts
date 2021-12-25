import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/master-data/user/user.service';

@Component({
  selector: 'app-self',
  templateUrl: './self.component.html',
  styleUrls: ['./self.component.scss']
})
export class SelfComponent implements OnInit {

  self: any;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }
}
