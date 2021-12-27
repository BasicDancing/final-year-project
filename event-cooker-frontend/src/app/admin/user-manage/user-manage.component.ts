import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/master-data/user/user';
import { UserService } from 'src/app/master-data/user/user.service';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.scss']
})
export class UserManageComponent implements OnInit {
  users: User[];

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.getAllUser()
  }

  getAllUser(){
    this.userService.getAll().subscribe(
      (data) => {
        this.users = data;
        this.users.reverse();
        console.log(data);
      }
    );
  }

  approval(id: string){
    this.userService.approve(id).subscribe(
      (data) => {
        console.log(data);
      }
    );
    this.getAllUser();
  }

}
