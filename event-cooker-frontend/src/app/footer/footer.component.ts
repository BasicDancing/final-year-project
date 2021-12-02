import { Component, OnInit } from '@angular/core';


var currentTime = new Date();

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
 
  year = currentTime.getUTCFullYear();

  constructor() { }

  ngOnInit(): void {
  }
}
