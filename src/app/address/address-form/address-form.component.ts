import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styles: [
  ]
})
export class AddressFormComponent implements OnInit {

  public fullForm:FormGroup;
  public patchData:any;
  public stateData:string;
  public cityData:string;
  constructor(private fb:FormBuilder) { 
    this.fullForm = this.fb.group({
      firstName:[''],
      lastName:[''],
    });
    this.patchData = {
      'firstName':"Abhishek",
      'lastName':"Patel",
      'state':"Gujarat",
      'city':"Valsad",
    }
  }

  ngOnInit(): void {
    if(this.patchData){
      this.fullForm.patchValue(this.patchData);
      this.stateData = this.patchData.state;
      this.cityData = this.patchData.city;
    }
  }

}
