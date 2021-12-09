import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinematographer',
  templateUrl: './cinematographer.component.html',
  styleUrls: ['./cinematographer.component.scss']
})
export class CinematographerComponent implements OnInit {

  numbers = Array(10);
  title = "Cinematographer";
  constructor() {
   }

  ngOnInit(): void {
  }

}
