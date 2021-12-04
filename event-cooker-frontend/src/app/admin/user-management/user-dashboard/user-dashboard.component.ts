import { Component, OnInit } from '@angular/core';

import {CardDetails, card } from "../../../master-data/dummy-data/user-management"

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  
  cardDetails: CardDetails[] = card;
  //cardDetails = ['1', '2', '3', '4', '5'];
  
  constructor() { }
  ngOnInit(): void {
  }

}
