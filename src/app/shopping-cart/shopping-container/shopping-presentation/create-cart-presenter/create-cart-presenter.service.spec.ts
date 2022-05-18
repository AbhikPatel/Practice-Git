import { TestBed } from '@angular/core/testing';

import { CreateCartPresenterService } from './create-cart-presenter.service';

describe('CreateCartPresenterService', () => {
  let service: CreateCartPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateCartPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
