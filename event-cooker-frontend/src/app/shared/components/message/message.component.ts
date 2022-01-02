import { Component, OnInit } from '@angular/core';
import { Confirmation } from 'src/app/master-data/confirmation/confirmation';
import { ConfirmationService } from 'src/app/master-data/confirmation/confirmation.service';
import { Post } from 'src/app/master-data/post/post';
import { PostService } from 'src/app/master-data/post/post.service';
import { UserService } from 'src/app/master-data/user/user.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  user: any;
  post: any;
  confirmation: any;
  id: any;
  messages: Array<Post>;

  constructor(
    private userService: UserService,
    private postService: PostService,
  ) { }

  ngOnInit(): void {
    this.reload();
  }

  reload(){
    this.loadMessages();
  }

  loadMessages(){
    this.id = localStorage.getItem('user');
    this.postService.getByEmployee(this.id).subscribe(
      (data) => {
        this.messages = data;
        // this.notification.id = this.confirmation.id;
        // this.notification.postId = this.confirmation.postId;
        // this.notification.profId = this.confirmation.profId;
        // this.notification.userId = this.confirmation.userId;
        // this.notification.proposal = this.confirmation.proposal;
        for(let message of this.messages){
          this.loadEmployees(message);
          console.log(message);
        }
        console.log(this.messages);
      }
    )
  }

  loadEmployees(message: Post){
    this.userService.get(message.user).subscribe(
      (data) => {
        this.user = data;
        message.userName = this.user.fullName;
        message.userStatus = this.user.approval;
        message.userPhoto = this.user.photo;
        message.userNumber = this.user.cellphone;
        console.log(message);
      }
    );
  }
}
