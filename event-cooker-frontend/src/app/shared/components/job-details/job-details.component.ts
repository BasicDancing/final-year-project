import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/master-data/post/post';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {
  
  @Input() post: any;

  constructor() { }

  ngOnInit(): void {
  }

  idCheck(userId: string): boolean{
    if(userId == localStorage.getItem('user')){
      return true;
    }else{
      return false;
    }
  }

}
