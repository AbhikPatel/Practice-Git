import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  
  public api:string = 'http://localhost:3000/employees';

  constructor(private http:HttpClient) { }

  public getEmployees():Observable<any>{
    return this.http.get<any>(`${this.api}`);
  }
}
