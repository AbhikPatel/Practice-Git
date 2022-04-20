import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingContainerComponent } from './shopping-container/shopping-container.component';

const routes: Routes = [
  { path: '', 
    children:[
      { path:'', redirectTo:'list', pathMatch:'full'},
      { path:'list', component:ShoppingContainerComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCartRoutingModule { }
