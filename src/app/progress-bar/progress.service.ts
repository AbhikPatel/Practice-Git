import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ProgressService {

  public formData:any[] = [];
  public currentData$:BehaviorSubject<any>;
  public currentPage:any[];
  constructor(private route:Router) { 
    this.currentPage = [1];
    this.currentData$ = new BehaviorSubject('');
  }

  public onNext(id:number, value:any){
    this.currentPage.push(id);
    this.currentData$.next(value);
    this.formData.push(value);
  }

  public onPrevious(){
    this.currentPage.pop();
  }

  public reset(){
    this.currentPage = [1];
    this.route.navigateByUrl('/progress/formone');
  }
}
