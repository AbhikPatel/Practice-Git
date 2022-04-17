import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidentGameRoutingModule } from './resident-game-routing.module';
import { ResidentGameComponent } from './resident-game.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResidentService } from './resident.service';


@NgModule({
  declarations: [
    ResidentGameComponent,
    GameBoardComponent
  ],
  imports: [
    CommonModule,
    ResidentGameRoutingModule,
    ReactiveFormsModule
  ],
  providers:[
    ResidentService
  ]
})
export class ResidentGameModule { }
