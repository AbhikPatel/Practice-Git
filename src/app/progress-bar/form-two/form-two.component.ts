import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProgressService } from '../progress.service';

@Component({
  selector: 'app-form-two',
  templateUrl: './form-two.component.html',
  styles: [
  ]
})
export class FormTwoComponent implements OnInit {

  public twoGroup:FormGroup;
  constructor(private service:ProgressService, private fb:FormBuilder) { 
    this.twoGroup = this.fb.group({
      mobileNumber:['',[Validators.required]],
      age:['',[Validators.required]],
      email:['',[Validators.required]],
    });

    if(this.service.formData){
      this.service.currentData$.subscribe((data) => {
        this.twoGroup.patchValue(data);
      })
    }
  }

  ngOnInit(): void {
  }

  public next(){
    this.service.onNext(3,this.twoGroup.value);
    if(this.service.formData.length > 2){
      this.service.currentData$.next(this.service.formData[2]);
    }
  }

  public previous(){
    this.service.onPrevious();
    this.service.currentData$.next(this.service.formData[0]);
  }
}
