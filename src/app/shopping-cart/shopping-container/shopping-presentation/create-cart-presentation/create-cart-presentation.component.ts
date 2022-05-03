import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { productModel } from '../../models/product.model';
import { CreateCartPresenterService } from '../create-cart-presenter/create-cart-presenter.service';

@Component({
  selector: 'app-create-cart-presentation',
  templateUrl: './create-cart-presentation.component.html',
  styleUrls: ['./create-cart-presentation.component.scss'],
  viewProviders:[CreateCartPresenterService]
})
export class CreateCartPresentationComponent implements OnInit {

  @Output() public emitCancelData:EventEmitter<boolean>;
  @Output() public emitMail:EventEmitter<string>;
  @Output() public emitSubmitData:EventEmitter<productModel[]>;

  public productGroup:FormGroup;
  public productList:productModel[];
  public editId:number;
  public formStatus:string;
  public customerMail:string;

  constructor(private service:CreateCartPresenterService) { 
    this.productGroup = this.service.grouping();
    this.productList = [];
    this.formStatus = 'Add Product';
    this.emitCancelData = new EventEmitter();
    this.emitSubmitData = new EventEmitter();
    this.emitMail = new EventEmitter();
  }

  ngOnInit(): void {
  }

  public onAdd(){
    this.formStatus === 'Add Product' ?  this.productList.push(this.productGroup.value) : this.productList[this.editId] = this.productGroup.value;
    this.productGroup.reset();
  }

  public onEdit(id:number){
    this.productGroup.patchValue(this.productList[id]);
    this.editId = id;
    this.formStatus = 'Edit Product';
  }

  public onDelete(id:number){
    this.productList.splice(id,1)
  }

  public onCancel(){
    this.emitCancelData.emit();
  }

  public onSubmit(){
    this.emitSubmitData.emit(this.productList);
    this.emitMail.emit(this.customerMail)
  }
}
