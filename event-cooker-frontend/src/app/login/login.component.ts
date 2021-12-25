import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserAllInfoService } from '../master-data/auth/user-all-info.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm: any;
  user: any;
  token: any;
  execute: boolean = false;

  constructor(
    private userService: UserAllInfoService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
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
          this.findId(this.user.username);
        }
      )
    } else {
      alert('User form is not valid!!')
    }
  }

  findId(username: string){
    this.userService.getByUser(username).subscribe(
      (data) => {
        localStorage.setItem('user', data.userId)
        console.log(data);
      }
    );
  }

  openSnackBar(message: string) {
    if(this.userForm.username != '' && this.userForm.password != '' && this.token != ''){
      this._snackBar.open("Welcome", "Ok");
      this.execute = true;
    }
    else{
      this._snackBar.open("Username or password incorrect(:", "Ok");
    }
  }
}
