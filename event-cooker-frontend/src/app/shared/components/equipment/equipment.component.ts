import { Component, Input, OnInit } from '@angular/core';
import { Equipment } from 'src/app/master-data/equipment/equipment';
import { EquipmentService } from 'src/app/master-data/equipment/equipment.service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {

  equipments: Equipment[];
  display = "none";
  check: any;
  id: any;

  constructor(
    private eqService: EquipmentService,
  ) { }

  ngOnInit(): void {
    this.getEquipment();
  }

  getEquipment(){
    this.id = localStorage.getItem('user')
    this.eqService.getByUser(this.id).subscribe(
      (data) => {
        this.equipments = data;
        console.log(data);
      }
    );
  }

  openModal(key: string) {
    this.display = "block";
    this.check = key;
    console.log(key);
  }

  onCloseHandled() {
    this.display = "none";
    this.getEquipment();
  }

  isCheck(key: string): boolean {
    if(key == this.check){
      console.log("ture");
      return true;
    }
    else return false;
  }

  idCheck(userId: string): boolean{
    if(userId == localStorage.getItem('user')){
      return true;
    }else{
      return false;
    }
  }
}
