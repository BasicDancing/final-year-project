import { Component, Input, OnInit } from '@angular/core';
import { PostService } from 'src/app/master-data/post/post.service';

@Component({
  selector: 'app-job-feed-middle',
  templateUrl: './job-feed-middle.component.html',
  styleUrls: ['./job-feed-middle.component.scss']
})
export class JobFeedMiddleComponent implements OnInit {

  posts: Array<any>;
  display = "none";

  constructor(
    private postService: PostService,
  ) { }

  ngOnInit(): void {
    this.loadPost();
  }

  loadPost(){
    this.postService.getAll().subscribe(
      (data) => {
        this.posts = data;
        this.posts.reverse();
      }
    );
  }

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

  idCheck(userId: string): boolean{
    if(userId == localStorage.getItem('user')){
      return true;
    }else{
      return false;
    }
  }
}
