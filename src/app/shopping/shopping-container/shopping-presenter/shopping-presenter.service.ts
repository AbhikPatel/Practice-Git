import { Injectable } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { CreateCartPresentationComponent } from '../shopping-presentation/create-cart-presentation/create-cart-presentation.component';

@Injectable({
  providedIn: 'root'
})
export class ShoppingPresenterService {

  constructor(private overlay:Overlay) { }

  public OpenCreate(){
    const OverlayRef = this.overlay.create({
      height:'600px',
      hasBackdrop: true,
      positionStrategy:this.overlay.position().global().centerHorizontally().centerVertically(),
    })

    const component = new ComponentPortal(CreateCartPresentationComponent);
    const ComponentRef = OverlayRef.attach(component);

    OverlayRef.backdropClick().subscribe(() => {
      OverlayRef.detach();
    })
  }
}
