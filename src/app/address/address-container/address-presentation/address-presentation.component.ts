import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { AddressPresenterService } from '../address-presenter/address-presenter.service';

@Component({
  selector: 'app-address-presentation',
  templateUrl: './address-presentation.component.html',
  viewProviders: [AddressPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressPresentationComponent implements OnInit {

  @Input() public set getState(value: string | null) {
    if (value) {
      this._getState = value;
      this.test = value;
      console.log(this.test);
      this.addressGroup.controls['state'].patchValue(value);
    }
  }

  public get getState(): string {
    return this._getState
  }

  @Input() public set State(value: any[] | null) {
    if (value) {
      this._state = value;
    }
  }

  public get State(): any[] {
    return this._state
  }

  @Input() public set City(value: any[] | null) {
    if (value) {
      this._city = value;
    }
  }

  public get City(): any[] {
    return this._city
  }

  @Output() public emitStateId: EventEmitter<number>;

  private _state: any[];
  private _city: any[];
  private _getState: string;
  public test: string = '1';
  public num:number = 1;
  public myState: Subject<any>;

  public addressGroup: FormGroup;
  constructor(private service: AddressPresenterService) {
    this.addressGroup = this.service.getForm();
    this.emitStateId = new EventEmitter<number>();
    this.myState = new Subject();
  }

  ngOnInit(): void {
    this.myState.subscribe((res) => {
      console.log(this._state, res)
    })
  }

  public onSubmit() {
    this.emitStateId.emit(this.addressGroup.value.state);
  }

}
