import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './doctor.component';
import { MyPatientContainerComponent } from './my-patient-container/my-patient-container.component';
import { MyPatientTablePresentationComponent } from './my-patient-container/my-patient-table-presentation/my-patient-table-presentation.component';
import { MyPatientViewPresentationComponent } from './my-patient-container/my-patient-view-presentation/my-patient-view-presentation.component';
import { HttpClientModule } from '@angular/common/http';
import { DoctorService } from './doctor.service';


@NgModule({
  declarations: [
    DoctorComponent,
    MyPatientContainerComponent,
    MyPatientTablePresentationComponent,
    MyPatientViewPresentationComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    HttpClientModule
  ],
  providers:[
    DoctorService
  ]
})
export class DoctorModule { }
