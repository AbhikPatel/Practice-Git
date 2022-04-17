import { Component, OnInit } from '@angular/core';
import { ResidentService } from '../resident.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
  viewProviders:[ResidentService]
})
export class GameBoardComponent implements OnInit {

  public hidden:boolean = true;
  public current: boolean = true;
  public player1Final:boolean = false;
  public player2Final:boolean = false;
  public default:number;
  public default2:number;
  public final:number;
  public final2:number;
  public result:string;
  public player1:number[] = [];
  public player2:number[] = [];
  public player1Name:string;
  public player2Name:string;

  constructor(private service: ResidentService) { 
    this.default = Math.floor(Math.random() * 10);
    this.default2 = Math.floor(Math.random() * 10);
  }

  ngOnInit(): void {
    this.service.playerData$.subscribe(data => {
      this.player1Name = data.player1;
      this.player2Name = data.player2;
    })
  }

  public onHit(){
    this.player1.push(Math.floor(Math.random() * 10));
    this.current = false;
  }

  public onHit2(){
    this.player2.push(Math.floor(Math.random() * 10));
    this.current = true;
  }

  public onPass(){
    this.current === true ? this.current = false : this.current = true;
    this.player1Final = true;

    if(this.player1Final === true && this.player2Final === true){
      this.finalResult();
    }
  }
  
  public onPass2(){
    this.current === true ? this.current = false : this.current = true;
    this.player2Final = true;
    
    if(this.player1Final === true && this.player2Final === true){
      this.finalResult();
    }
  }


  public onRestart(){
    this.hidden = true;
    this.player1 = [];
    this.player2 = [];
    this.result = '';
    this.player1Final = false;
    this.player2Final = false;
  }

  public finalResult(){
    this.hidden = false;
    this.final = this.player1.reduce((a,b) => a+b, 0) + this.default;
    this.final2 = this.player2.reduce((a,b) => a+b, 0) + this.default;

    if(this.final > 21 && this.final2 > 21){
      this.result = 'Tie';
    }else if(this.final > 21 && this.final2 < 21){
      this.result = 'Player 2 Wins';
    }else if(this.final < 21 && this.final2 > 21){
      this.result = 'Player 1 Wins';
    }else{
      if(this.final > this.final2){
        this.result = 'Player 1 Wins';
      }else{
        this.result = 'Player 2 Wins';
      }
    }
  }

}
