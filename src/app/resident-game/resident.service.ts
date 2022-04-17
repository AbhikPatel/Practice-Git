import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { residentModel } from './resident.model';

@Injectable({
  providedIn: 'root'
})
export class ResidentService {

  public playerData:Subject<residentModel>;
  public playerData$:Observable<residentModel>;
  constructor() { 
    this.playerData = new Subject();
    this.playerData$ = this.playerData.asObservable();
  }

  public getData(data:residentModel){
    this.playerData.next(data);
  }
}
