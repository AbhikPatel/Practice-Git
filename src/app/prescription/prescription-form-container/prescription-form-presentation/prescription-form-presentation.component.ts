import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-prescription-form-presentation',
  templateUrl: './prescription-form-presentation.component.html',
  styleUrls: ['./prescription-form-presentation.component.scss']
})
export class PrescriptionFormPresentationComponent implements OnInit {

  public medicineGroup:FormGroup;
  public medicineData:any[] = [];
  constructor(private fb:FormBuilder) { 
    this.medicineGroup = this.fb.group(
      {
        exp:[],
        mail:[],
        diseases:[],
        medicine:[],
        dosage:[],
        days:[],
        meal:[],
      }
    )
  }

  ngOnInit(): void {
  }

  public onAdd(){
    this.medicineData.push(this.medicineGroup.value)
  }

}
