import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-musician',
  templateUrl: './musician.component.html',
  styleUrls: ['./musician.component.scss']
})
export class MusicianComponent implements OnInit {

  users = Array(10);
  title = "Musician";

  constructor() { }

  ngOnInit(): void {
  }

}
