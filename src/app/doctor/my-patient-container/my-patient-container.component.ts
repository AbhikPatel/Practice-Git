import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-my-patient-container',
  templateUrl: './my-patient-container.component.html',
  styles: [
  ]
})
export class MyPatientContainerComponent implements OnInit {

  public getPatient$:Observable<any[]>;
  public getPrescription$:Observable<any>;
  constructor(private service:DoctorService) { 
    this.getPatient$ = new Observable;
    this.getPrescription$ = new Observable;
  }

  ngOnInit(): void {
    this.getPatient$ = this.service.getpatient();
  }

  public getId(id:number){
    this.getPrescription$ = this.service.getById(id);
  }

}
