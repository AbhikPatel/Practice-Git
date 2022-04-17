import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resident-game',
  templateUrl: './resident-game.component.html',
  styleUrls: ['./resident-game.component.scss']
})
export class ResidentGameComponent implements OnInit {

  public hidden:boolean = true;
  public default:number;
  public default2:number;
  public final:number;
  public final2:number;
  public result:string;
  public player1:number[] = [];
  public player2:number[] = [];
  constructor() { 
    this.default = Math.floor(Math.random() * 21);
    this.default2 = Math.floor(Math.random() * 21);
  }

  ngOnInit(): void {
  }

  public onHit(){
    this.player1.push(Math.floor(Math.random() * 21))
  }

  public onHit2(){
    this.player2.push(Math.floor(Math.random() * 21))
  }

  public onPass(){
    this.hidden = false;
    this.final = this.player1.reduce((a,b) => a+b, 0) + this.default;
    this.final2 = this.player2.reduce((a,b) => a+b, 0) + this.default;

    if(this.final && this.final2 > 21){
      this.result = 'Tie';
    }else if(this.final > this.final2){
      this.result = 'Player 1 Wins'
    }else{
      this.result = 'Player 2 Wins'
    }
  }
}
