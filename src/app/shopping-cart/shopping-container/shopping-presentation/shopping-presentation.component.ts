import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingPresenterService } from '../shopping-presenter/shopping-presenter.service';

@Component({
  selector: 'app-shopping-presentation',
  templateUrl: './shopping-presentation.component.html',
  styleUrls: ['./shopping-presentation.component.scss'],
  viewProviders:[ShoppingPresenterService],
})
export class ShoppingPresentationComponent implements OnInit {

  @Input() public set customerData(v : any) {
    this._customerData = v;
  }
  public get customerData() : any {
    return this._customerData;
  }
  
  @Output() public emitCustomerMail:EventEmitter<string>;
  
  private _customerData : any;
  constructor(private service:ShoppingPresenterService) { 
    this.emitCustomerMail = new EventEmitter();
  }

  ngOnInit(): void {
    this.service.customerMail$.subscribe((data) => {
      this.emitCustomerMail.emit(data);
    })
  }

  public onCreate(){
    this.service.openCreate();
  }

  // ngAfterContentChecked(){
  //   console.log(this._customerData);
  // }
}
