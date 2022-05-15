import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  api:string = 'http://localhost:3000/patient';
  constructor(private http:HttpClient) { }

  public getpatient():Observable<any[]>{
    return this.http.get<any[]>(`${this.api}`)
  }

  public getById(id:number):Observable<any>{
    return this.http.get<any>(`${this.api}/${id}`)
  }
}
