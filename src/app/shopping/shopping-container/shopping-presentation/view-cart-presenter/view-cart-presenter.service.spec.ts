import { TestBed } from '@angular/core/testing';

import { ViewCartPresenterService } from './view-cart-presenter.service';

describe('ViewCartPresenterService', () => {
  let service: ViewCartPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewCartPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
