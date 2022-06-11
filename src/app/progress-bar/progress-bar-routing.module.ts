import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormFourComponent } from './form-four/form-four.component';
import { FormOneComponent } from './form-one/form-one.component';
import { FormThreeComponent } from './form-three/form-three.component';
import { FormTwoComponent } from './form-two/form-two.component';
import { ProgressBarComponent } from './progress-bar.component';

const routes: Routes = [
  { path: '', component: ProgressBarComponent,
    children:[
      { path:'', redirectTo:'formone', pathMatch:'full'},
      { path:'formone', component:FormOneComponent },
      { path:'formtwo', component:FormTwoComponent },
      { path:'formthree', component:FormThreeComponent },
      { path:'formfour', component:FormFourComponent },
    ]
  }
  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgressBarRoutingModule { }
