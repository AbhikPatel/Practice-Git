import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionTableContainerComponent } from './prescription-table-container.component';

describe('PrescriptionTableContainerComponent', () => {
  let component: PrescriptionTableContainerComponent;
  let fixture: ComponentFixture<PrescriptionTableContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriptionTableContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionTableContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
