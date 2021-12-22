import { Component, OnInit } from '@angular/core';

import {CardDetails, card } from "../../master-data/dummy-data/user-dashboard"


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  cardDetails: CardDetails[] = card;

  constructor() { }

  ngOnInit(): void {
    
  }

  titleSave(title: string){
    localStorage.setItem('title', title);
  }

}
