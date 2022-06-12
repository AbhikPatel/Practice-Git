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
    this.formData.length < id-1 ? this.formData.push(value) : this.formData.splice(id-2,1,value);
    // this.formData.push(value);
  }

  public onPrevious(){
    this.currentPage.pop();
  }

  public reset(){
    this.currentPage = [1];
    this.route.navigateByUrl('/progress/formone');
  }
}
