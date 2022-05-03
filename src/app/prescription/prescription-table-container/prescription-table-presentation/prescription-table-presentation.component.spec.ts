import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionTablePresentationComponent } from './prescription-table-presentation.component';

describe('PrescriptionTablePresentationComponent', () => {
  let component: PrescriptionTablePresentationComponent;
  let fixture: ComponentFixture<PrescriptionTablePresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriptionTablePresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionTablePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
