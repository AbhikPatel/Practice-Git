import { TestBed } from '@angular/core/testing';

import { PrescriptionOverlayPresenterService } from './prescription-overlay-presenter.service';

describe('PrescriptionOverlayPresenterService', () => {
  let service: PrescriptionOverlayPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrescriptionOverlayPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
