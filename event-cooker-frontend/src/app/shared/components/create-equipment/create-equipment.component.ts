import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Equipment } from 'src/app/master-data/equipment/equipment';
import { EquipmentService } from 'src/app/master-data/equipment/equipment.service';

@Component({
  selector: 'app-create-equipment',
  templateUrl: './create-equipment.component.html',
  styleUrls: ['./create-equipment.component.scss']
})
export class CreateEquipmentComponent implements OnInit {

  userForm: any;
  user: Equipment;
  id: string | null;

  constructor(
    private equipmentService: EquipmentService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(){
    this.userForm = this.formBuilder.group({
      name: [''],
      model: [''],
      photo: [''],
      weight: [''],
      description: [''],
    });
  }

  createEquipment(){
    if(this.userForm.valid){
      this.user = this.userForm.value;
      this.id = localStorage.getItem('user');
      this.user.user = this.id;
      console.log(this.user);
      this.equipmentService.create(this.user).subscribe(
        (data) => {
          console.log(data);
        }
      )
      alert('Successfully created!')
      this.refresh()
    } else {
      alert('User form is not valid!!')
    }
  }
}
