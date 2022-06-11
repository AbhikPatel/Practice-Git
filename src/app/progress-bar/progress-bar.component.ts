import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: [],
})
export class ProgressBarComponent implements OnInit {

  public demo:any[];
  constructor() { 
    this.demo = [1];
  }

  ngOnInit(): void {
  }

  public onAdd(){
    this.demo.push(1);
  }

  public onPop(){
    this.demo.pop();
  }

}
