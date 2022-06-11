import { Injectable } from '@angular/core';

@Injectable()
export class ProgressService {

  public currentPage:any[];
  constructor() { 
    this.currentPage = [1];
  }

  public onNext(id:number){
    this.currentPage.push(id);
  }

  public onPrevious(){
    this.currentPage.pop();
  }
}
