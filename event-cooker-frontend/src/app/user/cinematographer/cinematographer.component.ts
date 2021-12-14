import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinematographer',
  templateUrl: './cinematographer.component.html',
  styleUrls: ['./cinematographer.component.scss']
})
export class CinematographerComponent implements OnInit {

  users = Array(10);
  title = "Cinematographer";
  constructor() {
   }

  ngOnInit(): void {
  }

}
