import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { EmployeesFormContainerComponent } from './employees-form-container/employees-form-container.component';
import { EmployeesListContainerComponent } from './employees-list-container/employees-list-container.component';
import { EmployeesFormPresentationComponent } from './employees-form-container/employees-form-presentation/employees-form-presentation.component';
import { EmployeesListPresentationComponent } from './employees-list-container/employees-list-presentation/employees-list-presentation.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';


@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeesFormContainerComponent,
    EmployeesListContainerComponent,
    EmployeesFormPresentationComponent,
    EmployeesListPresentationComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    OverlayModule
  ]
})
export class EmployeesModule { }
