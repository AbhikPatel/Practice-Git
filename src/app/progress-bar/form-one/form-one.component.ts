import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProgressService } from '../progress.service';

@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styles: [
  ]
})
export class FormOneComponent implements OnInit {

  public oneGroup:FormGroup;
  constructor(private service:ProgressService, private fb:FormBuilder) { 
    this.oneGroup = this.fb.group(
      {
        firstName:['',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]],
        lastName:['',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]],
      }
    );
    if(this.service.formData.length != 0){
      this.service.currentData$.subscribe((data) => {
        this.oneGroup.patchValue(data);
      })
    }
  }

  ngOnInit(): void {
  }

  public next(){
    this.service.onNext(2,this.oneGroup.value);

    if(this.service.formData){
      this.service.currentData$.next(this.service.formData[1]);
    }
  }

  public get getControls(){
    return this.oneGroup['controls'];
  }

}
