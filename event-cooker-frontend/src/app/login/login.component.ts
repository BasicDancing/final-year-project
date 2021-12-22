import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserAllInfoService } from '../master-data/auth/user-all-info.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm: any;
  user: any;
  token: any

  constructor(
    private userService: UserAllInfoService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.refresh()
  }

  refresh(){
    this.userForm = this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }

  loginProfile(){
    if(this.userForm.valid){
      this.user = this.userForm.value;
      console.log(this.user);
      this.userService.login(this.user).subscribe(
        (data) => {
          console.log(data);
          this.token = data.jwt;
          localStorage.setItem('token', this.token);
          localStorage.setItem('user', this.user.username);
          console.log(this.token);
          alert("User Logged in");
        }
      )
    } else {
      alert('User form is not valid!!')
    }
  }
}
