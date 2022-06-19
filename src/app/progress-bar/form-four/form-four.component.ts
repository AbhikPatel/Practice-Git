import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProgressService } from '../progress.service';

@Component({
  selector: 'app-form-four',
  templateUrl: './form-four.component.html',
  styles: [
  ]
})
export class FormFourComponent implements OnInit {

  public fourGroup:FormGroup;
  constructor(private service:ProgressService, private fb:FormBuilder) { 
    this.fourGroup = this.fb.group({
      companyName:['',[Validators.required]],
      position:['',[Validators.required]],
      department:['',[Validators.required]],
      salary:['',[Validators.required]],
      experience:['',[Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  public previous(){
    this.service.onPrevious();
    if(this.service.formData.length > 3){
      this.service.currentData$.next(this.service.formData[2]);
    }
  }

  public onSubmit(){
    this.service.openOverlay();
  }

}
