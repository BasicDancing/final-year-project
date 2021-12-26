import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/master-data/user/user.service';

@Component({
  selector: 'app-job-feed-right',
  templateUrl: './job-feed-right.component.html',
  styleUrls: ['./job-feed-right.component.scss']
})
export class JobFeedRightComponent implements OnInit {
  users: any;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.loadUser()
  }

  loadUser(){
    this.userService.getAll().subscribe(
      (data) => {
        this.users = data;
        console.log(this.users);
      }
    );
  }
}
