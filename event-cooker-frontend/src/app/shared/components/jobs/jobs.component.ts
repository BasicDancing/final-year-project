import { Component, OnInit } from '@angular/core';
import { UserAllInfoService } from 'src/app/master-data/auth/user-all-info.service';
import { Post, posts } from '../../../master-data/jobs/jobs';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  posts: Post[] = posts;
  user: any;
  userName: any;
  token: any;

  constructor(
    private userInfo: UserAllInfoService,
  ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    console.log(this.token);
    this.profile()
  }

  profile(){
    this.userInfo.getByUser(this.userName).subscribe(
      (data) => {
        this.user = data;
        console.log(this.user);
        this.token = localStorage.getItem('token');
        console.log(this.token);
      }
    )
  }

}

