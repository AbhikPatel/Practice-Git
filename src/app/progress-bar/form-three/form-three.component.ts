import { Component, OnInit } from '@angular/core';
import { ProgressService } from '../progress.service';

@Component({
  selector: 'app-form-three',
  templateUrl: './form-three.component.html',
  styles: [
  ]
})
export class FormThreeComponent implements OnInit {

  constructor(private service:ProgressService) { }

  ngOnInit(): void {
  }

  public next(){
    this.service.onNext(4);
  }

  public previous(){
    this.service.onPrevious();
  }
}
