import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidentGameRoutingModule } from './resident-game-routing.module';
import { ResidentGameComponent } from './resident-game.component';


@NgModule({
  declarations: [
    ResidentGameComponent
  ],
  imports: [
    CommonModule,
    ResidentGameRoutingModule
  ]
})
export class ResidentGameModule { }
