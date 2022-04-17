import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poker',
  templateUrl: './poker.component.html',
  styleUrls: ['./poker.component.scss']
})
export class PokerComponent implements OnInit {

  public cardNumber:number;
  public cardDeck:number[];
  constructor() {
    this.cardNumber = 10;
    this.cardDeck = [];
  }

  ngOnInit(): void {
  }

  public onChange(){
    this.cardNumber = Math.floor(Math.random() * 10);
  }
  
  public onAdd(){
    this.cardDeck.push(this.cardNumber);
  }

  public onPop(){
    this.cardDeck.pop();
  }

}
