import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Post } from 'src/app/master-data/post/post';
import { PostService } from 'src/app/master-data/post/post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  userForm: any;
  user: Post;
  id: string | null;

  constructor(
    private postService: PostService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(){
    this.userForm = this.formBuilder.group({
      title: [''],
      photo: [''],
      description: [''],
    });
  }

  createPost(){
    if(this.userForm.valid){
      this.user = this.userForm.value;
      this.id = localStorage.getItem('user');
      this.user.user = this.id;
      this.user.approval = false;
      console.log(this.user);
      this.postService.create(this.user).subscribe(
        (data) => {
          console.log(data);
        }
      )
      alert('Successfully created! But need varification for publish.')
      this.refresh()
    } else {
      alert('User form is not valid!!')
    }
  }
}
