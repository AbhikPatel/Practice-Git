import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { diseasesModel, medicineModel } from '../../models/medicine.model';

@Component({
  selector: 'app-prescription-form-presentation',
  templateUrl: './prescription-form-presentation.component.html',
  styleUrls: ['./prescription-form-presentation.component.scss']
})
export class PrescriptionFormPresentationComponent implements OnInit {

  public diseasesGroup:FormGroup;
  public medicineGroup:FormGroup;
  constructor(private fb:FormBuilder) { 
    this.diseasesGroup = this.fb.group(
      {
        exp:[''],
        mail:[''],
        diseases: this.fb.group(
          {
            medicinename:['',Validators.required],
            dosage:['',Validators.required],
            days:['',Validators.required],
            meal:['',Validators.required],
          }
        )
      }
    )
  }

  ngOnInit(): void {
  }

  public onAdd(){
    // this.medicineData.push(this.diseasesGroup.value.diseases);
    // this.medicine.push(this.medicineGroup.value);

    console.log(this.diseasesGroup.value);
    
  }

}
