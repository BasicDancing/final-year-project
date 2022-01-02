import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/master-data/user/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  userForm: any;
  user: any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.refresh()
  }

  id: any;
  about: string;

  refresh(){
    // this.id = localStorage.getItem('user');
    // this.userService.get(this.id).subscribe(
    //   (data) => {
    //     this.user = data;
    //     console.log(this.user.about);
    //   }
    // );

    // console.log(this.user.about);
    // this.about = this.user.about;

    this.userForm = this.formBuilder.group({
      website: [''],
      about: [''],
      description: [''],
      photo: [''],
      cellphone: [''],
    });
  }

  profileEdit(){
    if(this.userForm.valid){
      console.log(this.userForm.value)
      this.id = localStorage.getItem('user');
      if(this.userForm.value.website == ''){
        this.userForm.value.website = null;
      }
      if(this.userForm.value.about == ''){
        this.userForm.value.about = null;
      }
      if(this.userForm.value.description == ''){
        this.userForm.value.description = null;
      }
      if(this.userForm.value.photo == ''){
        this.userForm.value.photo = null;
      }
      if(this.userForm.value.cellphone == ''){
        this.userForm.value.photo = null;
      }
      this.userService.update(this.id, this.userForm.value).subscribe(
        (data) => {
          console.log(data);
        }
      );
    } else {
      alert('User form is not valid!!')
    }
  }

}
