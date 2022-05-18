import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit, } from '@angular/core';
import { residentModel } from '../resident.model';
import { ResidentService } from '../resident.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
})
export class GameBoardComponent implements OnInit {

  public name: string

  public hidden: boolean = true;
  public current: boolean = true;
  public player1Final: boolean = false;
  public player2Final: boolean = false;
  public player1Winner: boolean = false;
  public player2Winner: boolean = false;
  public default: number;
  public default2: number;
  public final: number;
  public final2: number;
  public result: string;

  public player1: number[] = [];
  public player2: number[] = [];

  public player: residentModel;

  public player1Name: string;
  public player2Name: string;

  constructor(private service: ResidentService, private cd: ChangeDetectorRef) {
    this.default = Math.floor(Math.random() * 10);
    this.default2 = Math.floor(Math.random() * 10);
    this.name = "World";
    this.player = {} as residentModel;
  }

  ngOnInit(): void {
    let count = 1;
    this.service.playerData.subscribe({
      next: (res) => {
        this.player = res;
        this.player1Name = res.player1;
        this.player2Name = res.player2;
        console.log(this.player);
      }
    })
    count++;
  }


  public onHit() {
    this.player1.push(Math.floor(Math.random() * 10));
    this.current = false;
  }

  public onHit2() {
    this.player2.push(Math.floor(Math.random() * 10));
    this.current = true;
  }

  public onPass() {
    this.current === true ? this.current = false : this.current = true;
    this.player1Final = true;

    if (this.player1Final === true && this.player2Final === true) {
      this.finalResult();
    }
  }

  public onPass2() {
    this.current === true ? this.current = false : this.current = true;
    this.player2Final = true;

    if (this.player1Final === true && this.player2Final === true) {
      this.finalResult();
    }
  }


  public onRestart() {
    this.hidden = true;
    this.player1 = [];
    this.player2 = [];
    this.result = '';
    this.player1Final = false;
    this.player2Final = false;
    this.current = true;
  }

  public finalResult() {
    this.hidden = false;
    this.final = this.player1.reduce((a, b) => a + b, 0) + this.default;
    this.final2 = this.player2.reduce((a, b) => a + b, 0) + this.default2;

    if (this.final > 21 && this.final2 > 21) {
      this.result = 'Tie';
    } else if (this.final > 21 && this.final2 < 21) {
      this.result = this.player2Name + ' Wins';
    } else if (this.final < 21 && this.final2 > 21) {
      this.result = this.player1Name + ' Wins';
    } else {
      if (this.final > this.final2) {
        this.result = this.player1Name + ' Wins';
      } else {
        this.result = this.player2Name + ' Wins';
      }
    }

    this.player1.push(this.final);
    this.player2.push(this.final2);
  }

}
