import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameBoardComponent } from './game-board/game-board.component';
import { ResidentGameComponent } from './resident-game.component';

const routes: Routes = [
  { path: '', component: ResidentGameComponent },
  { path:'game', component:GameBoardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResidentGameRoutingModule { }
