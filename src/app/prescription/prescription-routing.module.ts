import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrescriptionFormContainerComponent } from './prescription-form-container/prescription-form-container.component';
import { PrescriptionTableContainerComponent } from './prescription-table-container/prescription-table-container.component';

const routes: Routes = [
  { path: '',
    children:[
      { path:'', redirectTo:'form', pathMatch:'full'},
      { path:'form', component:PrescriptionFormContainerComponent},
      { path:'list', component:PrescriptionTableContainerComponent},
    ]    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrescriptionRoutingModule { }
