import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo:'poker', pathMatch:'full'},
  { path: 'poker', loadChildren: () => import('./poker/poker.module').then(m => m.PokerModule) },
  { path: 'resident', loadChildren: () => import('./resident-game/resident-game.module').then(m => m.ResidentGameModule) },
  { path: 'validation', loadChildren: () => import('./form-validation/form-validation.module').then(m => m.FormValidationModule) },
  { path: 'shopping', loadChildren: () => import('./shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule) },
  { path: 'prescription', loadChildren: () => import('./prescription/prescription.module').then(m => m.PrescriptionModule) },
  { path: 'progress', loadChildren: () => import('./progress-bar/progress-bar.module').then(m => m.ProgressBarModule) },
  { path: 'address', loadChildren: () => import('./address/address.module').then(m => m.AddressModule) },
  { path: 'employees', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule) },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
