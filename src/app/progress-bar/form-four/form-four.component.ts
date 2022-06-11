import { Component, OnInit } from '@angular/core';
import { ProgressService } from '../progress.service';

@Component({
  selector: 'app-form-four',
  templateUrl: './form-four.component.html',
  styles: [
  ]
})
export class FormFourComponent implements OnInit {

  constructor(private service:ProgressService) { }

  ngOnInit(): void {
  }

  public previous(){
    this.service.onPrevious();
  }

}
