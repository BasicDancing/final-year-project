import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/master-data/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: any | null;
  id: any;
  equipments: Array<any> = new Array(10)

  constructor(
    private location: Location,
    private userService: UserService,
    ) { }

  ngOnInit(): void {
    this.self();
  }

  self(){
    this.user = this.location.getState();
    this.user = this.user.user;
    console.log(this.user);

    if(!this.user){
      this.id = localStorage.getItem('user');
      this.userService.get(this.id).subscribe(
        (data) => {
          this.user = data;
          console.log(this.user);
        }
      )
    }

  }

  display = "none";

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

}
