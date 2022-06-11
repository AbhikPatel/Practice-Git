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
        firstname:['',[Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
        lastname:['',[Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
        mail:['',[Validators.required,Validators.email]],
        phone:['',[Validators.required, Validators.minLength(10)]],
        age:['',[Validators.required, Validators.maxLength(3)]],
      }
    )
  }

  ngOnInit(): void {
  }

  public get getControls(){
    return this.testGroup['controls'];
  }
  

}
