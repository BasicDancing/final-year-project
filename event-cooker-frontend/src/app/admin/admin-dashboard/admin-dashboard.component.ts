import { Component, OnInit } from '@angular/core';
import { UserCount } from 'src/app/master-data/dummy-data/user-count';
import { card, CardDetails } from 'src/app/master-data/dummy-data/user-dashboard';
import { User } from 'src/app/master-data/user/user';
import { UserService } from 'src/app/master-data/user/user.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  
  users: User[];
  frequency = [0, 0, 0, 0, 0, 0, 0, 0];
  profession: CardDetails[] = card;

  userCount = new Array();
  userC: UserCount;

  constructor(
    private userService: UserService,
  ) { }
  
  ngOnInit() {
    this.getAllUser();
  }

  getAllUser(){
    this.userService.getAll().subscribe(
      (data) => {
        this.users = data;
        console.log(data);
        this.countUser();
      }
    );
  }

  countUser(){
    for(let user of this.users){
      if(user.profession == "Photographer")this.frequency[0]++;
      if(user.profession == "Cinematographer")this.frequency[1]++;
      if(user.profession == "Voice Artist")this.frequency[2]++;
      if(user.profession == "Musician")this.frequency[3]++;
      if(user.profession == "Dancer")this.frequency[4]++;
      if(user.profession == "Decorator")this.frequency[5]++;
      if(user.profession == "Beauty Parlour")this.frequency[6]++;
      if(user.profession == "Catering")this.frequency[7]++;
    }

    
    for(let i = 0; i < 8; i++){
      console.log(this.frequency);
      this.userC = new UserCount();
      this.userC.profession = this.profession[i].title;
      this.userC.photo = this.profession[i].photo;
      this.userC.count = this.frequency[i];
      this.userCount.push(this.userC);
      console.log(this.userC);
    }
  }

}
