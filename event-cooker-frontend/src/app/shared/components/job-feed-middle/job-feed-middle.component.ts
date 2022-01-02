import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Post } from 'src/app/master-data/jobs/jobs';
import { PostService } from 'src/app/master-data/post/post.service';
import { JobDetailsComponent } from '../job-details/job-details.component';

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
    private modalService: NgbModal,
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

  openModal(post: Post) {
    this.display = "block";
    const modalRef = this.modalService.open(JobDetailsComponent, {size: 'lg', windowClass: 'modal-xl'});
    modalRef.componentInstance.post = post;
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
