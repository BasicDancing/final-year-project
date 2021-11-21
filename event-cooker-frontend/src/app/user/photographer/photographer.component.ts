import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Photographer } from './photographer';
import { PhotographerService } from './photographer.service';

@Component({
  selector: 'app-photographer',
  templateUrl: './photographer.component.html',
  styleUrls: ['./photographer.component.scss']
})
export class PhotographerComponent implements OnInit {

  photographers: Photographer[];
  
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
