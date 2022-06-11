import { Component, OnInit } from '@angular/core';
import { ProgressService } from '../progress.service';

@Component({
  selector: 'app-form-two',
  templateUrl: './form-two.component.html',
  styles: [
  ]
})
export class FormTwoComponent implements OnInit {

  constructor(private service:ProgressService) { }

  ngOnInit(): void {
  }

  public next(){
    this.service.onNext(3);
  }

  public previous(){
    this.service.onPrevious();
  }
}
