import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { productModel } from '../models/product.model';
import { CreateCartPresentationComponent } from '../shopping-presentation/create-cart-presentation/create-cart-presentation.component';
import { ViewCartPresentationComponent } from '../shopping-presentation/view-cart-presentation/view-cart-presentation.component';

@Injectable()
export class ShoppingPresenterService {

  public productList:productModel[];
  private customerMail:Subject<string>;
  public customerMail$:Observable<string>;

  constructor(private overlay:Overlay) { 
    this.productList = [];
    this.customerMail = new Subject();
    this.customerMail$ = this.customerMail.asObservable();
  }

  public openCreate(){
    const OverlayRef = this.overlay.create({
      hasBackdrop:true,
      width:'1200px',
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
    });

    const component = new ComponentPortal(CreateCartPresentationComponent);
    const componentRef = OverlayRef.attach(component);

    componentRef.instance.emitCancelData.subscribe(() => {
      OverlayRef.detach();
    })

    componentRef.instance.emitSubmitData.subscribe((data) => {
      OverlayRef.detach();
      this.productList = data;
      this.openView();
    })

    componentRef.instance.emitMail.subscribe((data) => {
      this.customerMail.next(data);
    })
  }

  public openView(){
    const OverlayRef = this.overlay.create({
      hasBackdrop:true,
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
    });

    const component = new ComponentPortal(ViewCartPresentationComponent);
    const componentRef = OverlayRef.attach(component);

    OverlayRef.backdropClick().subscribe(() => {
      OverlayRef.detach();
    })

    componentRef.instance.viewList = this.productList;
  }
}
