import { Component, OnInit } from '@angular/core';
import { ProgressService } from '../progress.service';

@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styles: [
  ]
})
export class FormOneComponent implements OnInit {

  constructor(private service:ProgressService) { }

  ngOnInit(): void {
  }

  public next(){
    this.service.onNext(2);
  }

  public previous(){
    this.service.onPrevious();
  }

}
