import { Component, OnInit } from '@angular/core';
import { ValidationsService } from './validations.service';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent implements OnInit {

  public userdata:any[] = [];
  constructor(private service:ValidationsService) { }

  ngOnInit(): void {
    this.service.getData().subscribe(data => {
      this.userdata = data;
    })
  }

}
