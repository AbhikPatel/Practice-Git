import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-address-container',
  templateUrl: './address-container.component.html'
})
export class AddressContainerComponent implements OnInit {

  @Input() public stateName:string;
  @Input() public cityName:string;

  public getState$:Observable<any[]>;
  public getCity$:Observable<any[]>;
  constructor(private service:AddressService) {
    this.getState$ = new Observable(); 
    this.getCity$ = new Observable(); 
  }
  
  ngOnInit(): void {
    this.getState$ = this.service.getState();
  }

  public emitStateId(id:number){
    if(id){
      this.getCity$ = this.service.getCity(id);
    }
  }

}
