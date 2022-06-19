import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { APIResponse } from './models/api.model';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  api:string = 'http://103.249.120.58:8510/api';

  constructor(private http:HttpClient) { }

  public getState():Observable<any[]>{
    return this.http.get<APIResponse>(`${this.api}/address/state`).pipe(
      map((res: APIResponse) => res.response));
  }

  public getCity(id:number):Observable<any[]>{
    return this.http.get<APIResponse>(`${this.api}/address/city/${id}`).pipe(
      map((res: APIResponse) => res.response));
  }
}
