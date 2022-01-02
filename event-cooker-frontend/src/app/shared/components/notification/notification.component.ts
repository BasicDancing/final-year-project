import { Component, OnInit } from '@angular/core';
import { data } from 'autoprefixer';
import { Confirmation } from 'src/app/master-data/confirmation/confirmation';
import { ConfirmationService } from 'src/app/master-data/confirmation/confirmation.service';
import { PostService } from 'src/app/master-data/post/post.service';
import { UserService } from 'src/app/master-data/user/user.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  user: any;
  post: any;
  confirmation: any;
  id: any;
  notifications: Array<Confirmation>;

  constructor(
    private confirmationService: ConfirmationService,
    private userService: UserService,
    private postService: PostService,
  ) { }

  ngOnInit(): void {
    this.reload();
  }

  reload(){
    this.loadNotifications();
  }

  loadNotifications(){
    this.id = localStorage.getItem('user');
    this.confirmationService.getByUser(this.id).subscribe(
      (data) => {
        this.notifications = data;
        // this.notification.id = this.confirmation.id;
        // this.notification.postId = this.confirmation.postId;
        // this.notification.profId = this.confirmation.profId;
        // this.notification.userId = this.confirmation.userId;
        // this.notification.proposal = this.confirmation.proposal;
        for(let notification of this.notifications){
          this.loadEmployees(notification);
          this.loadPost(notification);
          console.log(notification);
        }
        console.log(this.notifications);
      }
    )
  }

  loadEmployees(notification: Confirmation){
    this.userService.get(notification.profId).subscribe(
      (data) => {
        this.user = data;
        notification.name = this.user.fullName;
        notification.status = this.user.approval;
        console.log(notification);
      }
    );
  }

  loadPost(notification: Confirmation){
    this.postService.get(notification.postId).subscribe(
      (data) => {
        this.post = data;
        notification.title = this.post.title
        notification.approval = this.post.approval;
        notification.employeeId = this.post.employee;
      }
    );
  }

  employee: any;
  isAssign(notification: Confirmation): boolean{
    if(notification.employeeId != notification.profId){
      this.confirmation = "Already Assigned";
      return false;
    }
    else{
      this.confirmation = "Employee Hired";
      return true;
    }
  }

  assignation(profId: string, postId: string){
    this.postService.assign(postId, profId).subscribe(
      (data) => {
        console.log(data);
        this.postService.approve(postId).subscribe(
          (data) => {
            console.log(data);
          }
        );
      }
    )
  }
}
