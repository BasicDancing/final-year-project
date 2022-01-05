import { Component, OnInit } from '@angular/core';
import { data } from 'autoprefixer';
import { Post } from 'src/app/master-data/post/post';
import { PostService } from 'src/app/master-data/post/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts: Post[];

  constructor(
    private postService: PostService,
  ) { }

  ngOnInit(): void {
    this.refresh();
  }


  refresh(){
    this.getAllPost();
  }

  getAllPost(){
    this.postService.getAll().subscribe(
      (data) => {
        this.posts = data;
        this.posts.reverse();
        console.log(data);
      }
    );
  }

  approval(id: string){
    this.postService.approve(id).subscribe(
      (data) => {
        console.log(data);
        this.refresh()
      }
    );
  }

}
