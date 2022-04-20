import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCartPresentationComponent } from './create-cart-presentation.component';

describe('CreateCartPresentationComponent', () => {
  let component: CreateCartPresentationComponent;
  let fixture: ComponentFixture<CreateCartPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCartPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCartPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
