import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FormValidationRoutingModule } from './form-validation-routing.module';
import { FormValidationComponent } from './form-validation.component';
import { ValidationsService } from './validations.service';


@NgModule({
  declarations: [
    FormValidationComponent
  ],
  imports: [
    CommonModule,
    FormValidationRoutingModule,
    HttpClientModule
  ],
  providers:[
    ValidationsService
  ]
})
export class FormValidationModule { }
