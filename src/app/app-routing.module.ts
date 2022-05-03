import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', redirectTo:'poker', pathMatch:'full'},
  { path: 'poker', loadChildren: () => import('./poker/poker.module').then(m => m.PokerModule) },
  { path: 'validation', loadChildren: () => import('./form-validation/form-validation.module').then(m => m.FormValidationModule) },
  { path: 'shopping', loadChildren: () => import('./shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule) },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
