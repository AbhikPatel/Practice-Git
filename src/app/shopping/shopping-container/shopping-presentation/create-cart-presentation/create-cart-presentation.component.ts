import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CreateCartPresenterService } from '../create-cart-presenter/create-cart-presenter.service';

@Component({
  selector: 'app-create-cart-presentation',
  templateUrl: './create-cart-presentation.component.html',
  styleUrls: ['./create-cart-presentation.component.scss'],
  viewProviders:[CreateCartPresenterService]
})
export class CreateCartPresentationComponent implements OnInit {

  public productTable:any[] = [];
  public productGroup:FormGroup;
  constructor(private service:CreateCartPresenterService) { 
    this.productGroup = this.service.group();
  }

  ngOnInit(): void {
  }

  ngOnChanges(){
    console.log('sup');
    
  }

  public onAdd(){
    this.productTable.push(this.productGroup.value);
  }

  public onEdit(id:number){
    this.productGroup.patchValue(this.productTable[id])
  }

  public onDelete(id:number){
    this.productTable.splice(id,1)
  }

}
