import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {

  public api:string = 'http://localhost:3000/validation';
  constructor(private http:HttpClient) { }

  public getData():Observable<any>{
    return this.http.get<any>(`${this.api}`)
  }
}
