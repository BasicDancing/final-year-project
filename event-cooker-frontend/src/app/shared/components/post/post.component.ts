import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/master-data/post/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts: Array<any>;
  id: any;

  constructor(
    private postService: PostService,
  ) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(){
    this.postLoad();
  }

  postLoad(){
    this.id = localStorage.getItem('user');
    this.postService.getByUser(this.id).subscribe(
      (data) => {
        this.posts = data;
        this.posts.reverse();
        console.log(data);
      }
    );
  }

  deletePost(id: string){
    this.postService.delete(id).subscribe(
      (data) =>{
        console.log(data);
        this.refresh();
      }
    )
  }

  idCheck(userId: string): boolean{
    if(userId == localStorage.getItem('user')){
      return true;
    }else{
      return false;
    }
  }

}
