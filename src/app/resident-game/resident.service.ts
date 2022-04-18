import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { residentModel } from './resident.model';

@Injectable()
export class ResidentService {

  public playerData:BehaviorSubject<residentModel>;
  // public playerData$:Observable<residentModel>;
  constructor() { 
    this.playerData = new BehaviorSubject(new residentModel('Player 1', 'Player 2'));
    // this.playerData$ = this.playerData.asObservable();
  }

  public getData(data:residentModel){
    this.playerData.next(data);
  }
}
