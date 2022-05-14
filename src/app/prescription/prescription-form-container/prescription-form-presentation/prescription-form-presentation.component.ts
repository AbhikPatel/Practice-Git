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

   this.diseasesGroup = this.fb.group(
     {
       exp:[''],
       mail:[''],
       diseasesname:[''],
       medicine: this.fb.group(
        {
          medicinename:[''],
          dosage:[''],
          days:[''],
          meal:[''],
        })
     }
   )
  }

  ngOnInit(): void {
  }

  public onAdd() {
    // this.tableData.push(this.diseasesGroup.value.diseases);
    this.tableData = this.diseasesGroup.value
  }

  statisData: any[] = [
    {
      "diseases": 'fever',
      "medicine": [
        {
          'name': 'para',
          'dosage': 50,
          'days': 3,
          'meal': 'after'
        },
        {
          'name': 'alpha',
          'dosage': 70,
          'days': 3,
          'meal': 'after'
        },
        {
          'name': 'beta',
          'dosage': 1000,
          'days': 1,
          'meal': 'after'
        },
      ]
    },
    {
      "diseases": 'headache',
      "medicine": [
        {
          'name': 'para',
          'dosage': 50,
          'days': 3,
          'meal': 'after'
        },
        {
          'name': 'alpha',
          'dosage': 70,
          'days': 3,
          'meal': 'after'
        },
        {
          'name': 'beta',
          'dosage': 1000,
          'days': 1,
          'meal': 'after'
        },
      ]
    }
  ]
}
