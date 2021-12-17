import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Auth } from '../master-data/auth/auth';
import { UserAllInfoService } from '../master-data/auth/user-all-info.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userForm: any;
  user: Auth;

  constructor(
    private formBuilder: FormBuilder,
    private authService: UserAllInfoService,
    ) { }

  ngOnInit(): void {
    this.refresh();
  }
  refresh(){
    this.userForm = this.formBuilder.group({
      profession: [''],
      fullName: [''],
      userName: [''],
      email: [''],
      userId: [''],
      userPassword: [''],
    });
  }

  register(){
    if(this.userForm.valid){
      this.user = this.userForm.value;
      console.log(this.user);
      this.authService.create(this.user).subscribe(
        (data) => {
          console.log(data);
          this.refresh();
      });
    } else {
      alert('User form is not valid!!')
    }
  }

}
