import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesFormContainerComponent } from './employees-form-container/employees-form-container.component';
import { EmployeesListContainerComponent } from './employees-list-container/employees-list-container.component';
import { EmployeesComponent } from './employees.component';

const routes: Routes = [
  { path: '', component: EmployeesComponent, 
    children:[
      { path:'', redirectTo:'list', pathMatch:'full' },
      { path:'list', component:EmployeesListContainerComponent },
      { path:'form', component:EmployeesFormContainerComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
