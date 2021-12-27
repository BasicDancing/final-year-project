import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Equipment } from 'src/app/master-data/equipment/equipment';
import { EquipmentService } from 'src/app/master-data/equipment/equipment.service';
import { UserService } from 'src/app/master-data/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: any | null;
  id: any;
  equipments: Equipment[];

  constructor(
    private location: Location,
    private userService: UserService,
    private eqService: EquipmentService,
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
    this.self();
  }
  onCloseHandled() {
    this.display = "none";
    this.self();
  }

  idCheck(userId: string): boolean{
    if(userId == localStorage.getItem('user')){
      return true;
    }else{
      return false;
    }
  }

}
