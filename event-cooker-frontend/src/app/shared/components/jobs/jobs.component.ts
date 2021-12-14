import { Component, OnInit } from '@angular/core';
import { Post, posts } from '../../../master-data/jobs/jobs';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  posts: Post[] = posts;

  constructor() { }

  ngOnInit(): void {
  }

}

