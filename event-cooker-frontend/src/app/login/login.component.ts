import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserAllInfoService } from '../master-data/auth/user-all-info.service';
import { UserService } from '../master-data/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm: any;
  user: any;
  token: null | any;
  execute: boolean = false;

  constructor(
    private userService: UserAllInfoService,
    private verifyService: UserService,
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
      this.wrongSnackBar();
    } else {
      this.wrongSnackBar();
    }
  }

  findId(username: string){
    this.userService.getByUser(username).subscribe(
      (data) => {
        localStorage.setItem('user', data.userId)
        this.userVarify(data.userId);
        console.log(data);
      }
    );
  }

  userVarify(id: string){
    this.verifyService.get(id).subscribe(
      (data) => {
        if(!data.approval){
          localStorage.clear();
          this.wrongSnackBar();
        }else{
          this.welcomeSnackBar();
        }
      }
    );
  }

  welcomeSnackBar() {
      this._snackBar.open("Welcome", "Ok");
      this.execute = true;
  }

  wrongSnackBar() {
    this._snackBar.open("Username or password wrong(:", "Ok");
  }
}
