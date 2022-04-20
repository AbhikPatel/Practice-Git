import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCartPresentationComponent } from './view-cart-presentation.component';

describe('ViewCartPresentationComponent', () => {
  let component: ViewCartPresentationComponent;
  let fixture: ComponentFixture<ViewCartPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCartPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCartPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
