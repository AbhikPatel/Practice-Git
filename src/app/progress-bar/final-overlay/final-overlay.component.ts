import { Component, OnInit } from '@angular/core';
import { ProgressService } from '../progress.service';

@Component({
  selector: 'app-final-overlay',
  templateUrl: './final-overlay.component.html',
  styles: [
  ]
})
export class FinalOverlayComponent implements OnInit {

  public finalDetails:any[];
  constructor(private service:ProgressService) { 
    this.finalDetails = this.service.formData;
  }

  ngOnInit(): void {
  }

}
