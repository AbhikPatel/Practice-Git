import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingComponent } from './shopping.component';
import { ShoppingContainerComponent } from './shopping-container/shopping-container.component';
import { ShoppingPresentationComponent } from './shopping-container/shopping-presentation/shopping-presentation.component';
import { CreateCartPresentationComponent } from './shopping-container/shopping-presentation/create-cart-presentation/create-cart-presentation.component';
import { ViewCartPresentationComponent } from './shopping-container/shopping-presentation/view-cart-presentation/view-cart-presentation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';


@NgModule({
  declarations: [
    ShoppingComponent,
    ShoppingContainerComponent,
    ShoppingPresentationComponent,
    CreateCartPresentationComponent,
    ViewCartPresentationComponent,
  ],
  imports: [
    CommonModule,
    ShoppingRoutingModule,
    HttpClientModule,
    OverlayModule,
    ReactiveFormsModule
  ]
})
export class ShoppingModule { }
