import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrescriptionRoutingModule } from './prescription-routing.module';
import { PrescriptionComponent } from './prescription.component';
import { PrescriptionFormContainerComponent } from './prescription-form-container/prescription-form-container.component';
import { PrescriptionTableContainerComponent } from './prescription-table-container/prescription-table-container.component';
import { PrescriptionFormPresentationComponent } from './prescription-form-container/prescription-form-presentation/prescription-form-presentation.component';
import { PrescriptionOverlayPresentationComponent } from './prescription-form-container/prescription-form-presentation/prescription-overlay-presentation/prescription-overlay-presentation.component';
import { PrescriptionTablePresentationComponent } from './prescription-table-container/prescription-table-presentation/prescription-table-presentation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    PrescriptionComponent,
    PrescriptionFormContainerComponent,
    PrescriptionTableContainerComponent,
    PrescriptionFormPresentationComponent,
    PrescriptionOverlayPresentationComponent,
    PrescriptionTablePresentationComponent
  ],
  imports: [
    CommonModule,
    PrescriptionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule,
    NgSelectModule,
  ]
})
export class PrescriptionModule { }
