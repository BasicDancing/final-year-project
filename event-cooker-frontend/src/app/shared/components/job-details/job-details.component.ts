import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Confirmation } from 'src/app/master-data/confirmation/confirmation';
import { ConfirmationService } from 'src/app/master-data/confirmation/confirmation.service';
import { Post } from 'src/app/master-data/post/post';
import { PostService } from 'src/app/master-data/post/post.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {
  
  @Input() public post: Post;
  userForm: any;
  confirmation: Confirmation;
  id: any;

  constructor(
    private confirmationService: ConfirmationService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(){
    this.userForm = this.formBuilder.group({
      proposal: [''],
    });
  }

  sendProposal(postIn: Post){
    if(this.userForm.valid){
      this.confirmation = this.userForm.value;
      this.confirmation.postId = postIn.id;
      this.id = localStorage.getItem('user');
      this.confirmation.profId = this.id;
      this.confirmation.userId = postIn.user;
      console.log(this.confirmation);

      this.confirmationService.create(this.confirmation).subscribe(
        (data) => {
          console.log(data);
        }
      );
      alert('Successfully sent proposal!')
      this.refresh()
    } else {
      alert('User form is not valid!!')
    }
  }

  idCheck(userId: string): boolean{
    if(userId == localStorage.getItem('user')){
      return true;
    }else{
      return false;
    }
  }

}
