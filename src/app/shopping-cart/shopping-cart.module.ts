import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';
import { ShoppingContainerComponent } from './shopping-container/shopping-container.component';
import { ShoppingPresentationComponent } from './shopping-container/shopping-presentation/shopping-presentation.component';
import { CreateCartPresentationComponent } from './shopping-container/shopping-presentation/create-cart-presentation/create-cart-presentation.component';
import { ViewCartPresentationComponent } from './shopping-container/shopping-presentation/view-cart-presentation/view-cart-presentation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingService } from './shopping.service';


@NgModule({
  declarations: [
    ShoppingCartComponent,
    ShoppingContainerComponent,
    ShoppingPresentationComponent,
    CreateCartPresentationComponent,
    ViewCartPresentationComponent
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    HttpClientModule,
    OverlayModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[
    ShoppingService
  ]
})
export class ShoppingCartModule { }
