import { Component, OnInit } from '@angular/core';
import { productModel } from '../../models/product.model';

@Component({
  selector: 'app-view-cart-presentation',
  templateUrl: './view-cart-presentation.component.html',
  styleUrls: ['./view-cart-presentation.component.scss']
})
export class ViewCartPresentationComponent implements OnInit {

  public viewList:productModel[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
