import { TestBed } from '@angular/core/testing';

import { PrescriptionFormPresenterService } from './prescription-form-presenter.service';

describe('PrescriptionFormPresenterService', () => {
  let service: PrescriptionFormPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrescriptionFormPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
