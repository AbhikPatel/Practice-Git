import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResidentService } from './resident.service';

@Component({
  selector: 'app-resident-game',
  templateUrl: './resident-game.component.html',
  styleUrls: ['./resident-game.component.scss']
})
export class ResidentGameComponent implements OnInit {

  public residentGroup:FormGroup;
  constructor(private fb:FormBuilder, private service:ResidentService){
    this.residentGroup = this.fb.group({
      player1:['',Validators.required],
      player2:['',Validators.required],
    })
  }

  ngOnInit(): void {
  }

  public onSubmit(){
    this.service.getData(this.residentGroup.value)
  }
}
