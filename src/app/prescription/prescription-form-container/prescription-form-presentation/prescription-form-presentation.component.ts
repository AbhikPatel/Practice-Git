import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-prescription-form-presentation',
  templateUrl: './prescription-form-presentation.component.html',
  styleUrls: ['./prescription-form-presentation.component.scss']
})
export class PrescriptionFormPresentationComponent implements OnInit {

  public diseasesGroup: FormGroup;
  public medicineGroup: FormGroup;
  public tableData:any[] = [];
  constructor(private fb: FormBuilder) {
   this.medicineGroup = this.fb.group(
     {
       medicinename:[''],
       dosage:[''],
       days:[''],
       meal:[''],
     }
   )

   this.diseasesGroup = this.fb.group(
     {
       exp:[''],
       mail:[''],
       diseases:[''],
     }
   )
  }

  ngOnInit(): void {
  }

  public onAdd() {
    this.tableData.push(this.diseasesGroup.value.diseases)
    console.log(this.tableData[0]);
    
  }

  // tableData: any[] = [
  //   {
  //     "diseases": 'fever',
  //     "medicine": [
  //       {
  //         'name': 'para',
  //         'dosage': 50,
  //         'days': 3,
  //         'meal': 'after'
  //       },
  //       {
  //         'name': 'alpha',
  //         'dosage': 70,
  //         'days': 3,
  //         'meal': 'after'
  //       },
  //       {
  //         'name': 'beta',
  //         'dosage': 1000,
  //         'days': 1,
  //         'meal': 'after'
  //       },
  //     ]
  //   },
  //   {
  //     "diseases": 'headache',
  //     "medicine": [
  //       {
  //         'name': 'para',
  //         'dosage': 50,
  //         'days': 3,
  //         'meal': 'after'
  //       },
  //       {
  //         'name': 'alpha',
  //         'dosage': 70,
  //         'days': 3,
  //         'meal': 'after'
  //       },
  //       {
  //         'name': 'beta',
  //         'dosage': 1000,
  //         'days': 1,
  //         'meal': 'after'
  //       },
  //     ]
  //   }
  // ]
}
