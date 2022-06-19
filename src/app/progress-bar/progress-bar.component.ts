import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ProgressService } from './progress.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: [],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProgressBarComponent implements OnInit {

  public demo:any[];
  constructor(private service:ProgressService) { 
    this.demo = this.service.currentPage;
  }

  ngOnInit(): void {
  }

  public onReset(){
    this.service.reset();
  }
}
