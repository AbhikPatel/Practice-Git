import { Component, OnInit } from '@angular/core';
import { ShoppingPresenterService } from '../shopping-presenter/shopping-presenter.service';

@Component({
  selector: 'app-shopping-presentation',
  templateUrl: './shopping-presentation.component.html',
  styleUrls: ['./shopping-presentation.component.scss'],
  viewProviders:[ShoppingPresenterService]
})
export class ShoppingPresentationComponent implements OnInit {

  constructor(private service: ShoppingPresenterService) { }

  ngOnInit(): void {
  }

  public onCreate(){
    this.service.OpenCreate();
  }

}
