import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProgressService } from '../progress.service';

@Component({
  selector: 'app-form-three',
  templateUrl: './form-three.component.html',
  styles: [
  ]
})
export class FormThreeComponent implements OnInit {

  public threeGroup:FormGroup;
  constructor(private service:ProgressService, private fb:FormBuilder) { 
    this.threeGroup = this.fb.group({
      address:['',[Validators.required]],
      state:['',[Validators.required]],
      city:['',[Validators.required]],
    });

    if(this.service.formData){
      this.service.currentData$.subscribe((data) => {
        this.threeGroup.patchValue(data);
      })
    }
  }

  ngOnInit(): void {
  }

  public next(){
    this.service.onNext(4,this.threeGroup.value);
  }

  public previous(){
    this.service.onPrevious();
    this.service.currentData$.next(this.service.formData[1]);
  }
}
