import { Component, OnInit } from '@angular/core';
import { ProgressService } from './progress.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: [],
})
export class ProgressBarComponent implements OnInit {

  public demo:any[];
  constructor(private service:ProgressService) { 
    this.demo = this.service.currentPage;
  }

  ngOnInit(): void {
  }

  public onReset(){
    this.service.currentPage = [1];
  }
}
