import { Component, OnInit } from '@angular/core';

import { User } from '../../master-data/user/user';
import { PhotographerService } from '../../master-data/user/photographer/photographer.service';

@Component({
  selector: 'app-photographer',
  templateUrl: './photographer.component.html',
  styleUrls: ['./photographer.component.scss']
})
export class PhotographerComponent implements OnInit {

  users: User[];
  title = "Photographer";
  
  constructor(
    private photographerService: PhotographerService
  ) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    console.log("Worked")
    this.photographerService.getAll().subscribe(
      data => {
        this.users = data;
        console.log(this.users);
      }
    );
  }
}
