import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/master-data/user/user.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {

  users: Array<any>;
  title: any;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.title = localStorage.getItem('title');
    console.log(localStorage.getItem('title'));
    this.professional(this.title);
  }

  professional(title: string){
    this.userService.getProfessonal(title).subscribe(
      (data) => {
        this.users = data;
        console.log(this.users);
      }
    );
  }

}
