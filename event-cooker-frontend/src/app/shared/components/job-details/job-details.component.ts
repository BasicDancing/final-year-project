import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {
  display = "block";
  constructor() { }

  ngOnInit(): void {
  }

  onCloseHandled() {
    this.display = "none";
  }

}
