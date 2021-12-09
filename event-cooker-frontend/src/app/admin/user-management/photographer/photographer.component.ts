import { Component, OnInit } from '@angular/core';

import { User } from '../../../master-data/user/user';
import { PhotographerService } from '../../../master-data/user/photographer/photographer.service';


@Component({
  selector: 'app-photographer',
  templateUrl: './photographer.component.html',
  styleUrls: ['./photographer.component.scss']
})
export class PhotographerComponent implements OnInit {

  photographers: User[];
  
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
        this.photographers = data;
        console.log(this.photographers);
      }
    );
  }
}
