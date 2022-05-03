import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionFormContainerComponent } from './prescription-form-container.component';

describe('PrescriptionFormContainerComponent', () => {
  let component: PrescriptionFormContainerComponent;
  let fixture: ComponentFixture<PrescriptionFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriptionFormContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
