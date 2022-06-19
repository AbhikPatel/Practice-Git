import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeesService } from './employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html'
})
export class EmployeesComponent implements OnInit {

  public getEmployeesList$:Observable<any>;
  constructor(private service:EmployeesService) { 
    this.getEmployeesList$ = new Observable();
  }

  ngOnInit(): void {
    this.getEmployeesList$ = this.service.getEmployees();
  }

}
