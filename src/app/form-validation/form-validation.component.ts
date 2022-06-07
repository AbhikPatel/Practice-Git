import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationsService } from './validations.service';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent implements OnInit {

  public testGroup:FormGroup;
  constructor(private service:ValidationsService, private fb:FormBuilder) { 
    this.testGroup = this.fb.group(
      {
        first:['',Validators.required],
        last:['',Validators.required],
        mail:['',Validators.required],
        phone:['',Validators.required],
        age:['',Validators.required],
      }
    )


  }

  ngOnInit(): void {
  }

  public getControls(){
    return this.testGroup['controls']
  }
  

}
