import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentGameComponent } from './resident-game.component';

describe('ResidentGameComponent', () => {
  let component: ResidentGameComponent;
  let fixture: ComponentFixture<ResidentGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
