import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressRoutingModule } from './address-routing.module';
import { AddressComponent } from './address.component';
import { AddressContainerComponent } from './address-container/address-container.component';
import { AddressPresentationComponent } from './address-container/address-presentation/address-presentation.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddressService } from './address.service';


@NgModule({
  declarations: [
    AddressComponent,
    AddressContainerComponent,
    AddressPresentationComponent,
    AddressFormComponent
  ],
  imports: [
    CommonModule,
    AddressRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[
    AddressService
  ]
})
export class AddressModule { }
