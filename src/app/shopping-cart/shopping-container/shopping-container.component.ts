import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-container',
  templateUrl: './shopping-container.component.html',
  styleUrls: ['./shopping-container.component.scss']
})
export class ShoppingContainerComponent implements OnInit {

  public getData$:Observable<any>;
  public getFullData:any;
  public customerMail:any;

  constructor(private service:ShoppingService) { 
    this.getData$ = new Observable();
    this.getting();
  }

  ngOnInit(): void {
  }
  
  ngDoCheck(){
    this.getData$ = this.customerMail;
    console.log(this.customerMail);
  }
  
  public emitCustomerMail(mail:string){
    this.customerMail = this.getFullData.find((items:any) => {
      return items.email === mail;
    })
  }

  public getting(){
    this.service.getData().subscribe(data => {
      this.getFullData = data;
    })
  }
}
