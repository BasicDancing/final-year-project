import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  
  @Input() dropOptions: Array<any>;
  public show:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.show = !this.show;
    console.log(this.show);
  }
}
