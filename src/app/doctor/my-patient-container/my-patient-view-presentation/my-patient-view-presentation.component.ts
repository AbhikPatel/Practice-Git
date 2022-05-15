import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-patient-view-presentation',
  templateUrl: './my-patient-view-presentation.component.html',
  styles: [
  ]
})
export class MyPatientViewPresentationComponent implements OnInit {

  @Input() public set prescription(data:any | null){
    if(data){
      this._prescriptionData = data;
    }
  } 

  public get prescription():any{
    return this._prescriptionData;
  }

  public _prescriptionData:any;
  constructor() { 
    console.log(this._prescriptionData);
  }

  ngOnInit(): void {
  }

}
