import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionFormPresentationComponent } from './prescription-form-presentation.component';

describe('PrescriptionFormPresentationComponent', () => {
  let component: PrescriptionFormPresentationComponent;
  let fixture: ComponentFixture<PrescriptionFormPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriptionFormPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionFormPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
