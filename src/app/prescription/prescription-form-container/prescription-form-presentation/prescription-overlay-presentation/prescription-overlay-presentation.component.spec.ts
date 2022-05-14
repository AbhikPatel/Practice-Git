import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionOverlayPresentationComponent } from './prescription-overlay-presentation.component';

describe('PrescriptionOverlayPresentationComponent', () => {
  let component: PrescriptionOverlayPresentationComponent;
  let fixture: ComponentFixture<PrescriptionOverlayPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriptionOverlayPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionOverlayPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
