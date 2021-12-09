import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parlour',
  templateUrl: './parlour.component.html',
  styleUrls: ['./parlour.component.scss']
})
export class ParlourComponent implements OnInit {

  numbers = Array(10);
  title = "Parlour";

  constructor() { }

  ngOnInit(): void {
  }

}