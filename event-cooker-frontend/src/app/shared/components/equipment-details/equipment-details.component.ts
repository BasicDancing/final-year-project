import { Component, Input, OnInit } from '@angular/core';
import { Equipment } from 'src/app/master-data/equipment/equipment';

@Component({
  selector: 'app-equipment-details',
  templateUrl: './equipment-details.component.html',
  styleUrls: ['./equipment-details.component.scss']
})
export class EquipmentDetailsComponent implements OnInit {

  @Input() public equipment: Equipment;

  constructor() { }

  ngOnInit(): void {
  }

}
