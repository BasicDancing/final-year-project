import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/master-data/user/user.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class DropdownComponent implements OnInit {
  
  @Input() dropOptions: Array<any>;
  public show:boolean = false;
  user: any;

  constructor(
    private _eref: ElementRef,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.profile();
  }

  toggle(){
    this.show = !this.show;
    console.log(this.show);
  }

  onClick(event: { target: any; }) {
    if (!this._eref.nativeElement.contains(event.target)) // or some similar check
      this.show = false;
   }

   profile(){
    this.user = localStorage.getItem('user');
    this.userService.get(this.user).subscribe(
      (data) => {
        this.user = data;
        console.log(this.user);
      }
    );
  }

  logout(name: string){
    if(name == "Log Out")localStorage.clear();
  }
}
