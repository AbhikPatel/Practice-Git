import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable()
export class AddressPresenterService {

  constructor(private fb:FormBuilder) { }
  
  public getForm(){
    return this.fb.group({
      state:[''],
      city:[''],
    })
  }
}
