import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { FinalOverlayComponent } from './final-overlay/final-overlay.component';

@Injectable()
export class ProgressService {

  public formData:any[] = [];
  public currentData$:BehaviorSubject<any>;
  public currentPage:any[];
  constructor(private route:Router, private overlay:Overlay) { 
    this.currentPage = [1];
    this.currentData$ = new BehaviorSubject('');
  }

  public onNext(id:number, value:any){
    this.currentPage.push(id);
    this.currentData$.next(value);
    this.formData.length < id-1 ? this.formData.push(value) : this.formData.splice(id-2,1,value);
  }

  public onPrevious(){
    this.currentPage.pop();
  }

  public reset(){
    this.currentPage = [1];
    this.formData = [];
    this.route.navigateByUrl('/progress/formone');
  }

  public openOverlay(){
    const OverlayRef = this.overlay.create({
      hasBackdrop:true,
      width:'600px',
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
    });

    const component = new ComponentPortal(FinalOverlayComponent);
    const componentRef = OverlayRef.attach(component);

    OverlayRef.backdropClick().subscribe(() => {
      OverlayRef.detach();
    })
  }
}
