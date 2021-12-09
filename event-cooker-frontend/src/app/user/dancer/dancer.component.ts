import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dancer',
  templateUrl: './dancer.component.html',
  styleUrls: ['./dancer.component.scss']
})
export class DancerComponent implements OnInit {

  numbers = Array(10);
  title = "Dancer";

  constructor() { }

  ngOnInit(): void {
  }

}
