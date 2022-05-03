import { TestBed } from '@angular/core/testing';

import { PrescriptionTablePresenterService } from './prescription-table-presenter.service';

describe('PrescriptionTablePresenterService', () => {
  let service: PrescriptionTablePresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrescriptionTablePresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
