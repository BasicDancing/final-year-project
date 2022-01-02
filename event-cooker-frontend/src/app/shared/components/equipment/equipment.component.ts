import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Equipment } from 'src/app/master-data/equipment/equipment';
import { EquipmentService } from 'src/app/master-data/equipment/equipment.service';
import { CreateEquipmentComponent } from '../create-equipment/create-equipment.component';
import { EquipmentDetailsComponent } from '../equipment-details/equipment-details.component';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {

  equipments: Equipment[];
  equipment: Equipment;
  display = "none";
  check: any;
  id: any;

  constructor(
    private eqService: EquipmentService,
    private modalService: NgbModal,
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

  idCheck(userId: string): boolean{
    if(userId == localStorage.getItem('user')){
      return true;
    }else{
      return false;
    }
  }

  openModal(key: string, equipment: Equipment) {
    if(key=='view'){
      const modalRef = this.modalService.open(EquipmentDetailsComponent, {size: 'lg', windowClass: 'modal-xl'});
      modalRef.componentInstance.equipment = equipment;
    }else{
      const modalRef = this.modalService.open(CreateEquipmentComponent, {size: 'lg', windowClass: 'modal-xl'});
      //modalRef.componentInstance.equipment = equipment;
    }
  }
}
