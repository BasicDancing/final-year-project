import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catering',
  templateUrl: './catering.component.html',
  styleUrls: ['./catering.component.scss']
})
export class CateringComponent implements OnInit {

  numbers = Array(10);
  title = "Catering";

  constructor() { }

  ngOnInit(): void {
  }

}
