import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidentGameComponent } from './resident-game.component';

const routes: Routes = [{ path: '', component: ResidentGameComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResidentGameRoutingModule { }
