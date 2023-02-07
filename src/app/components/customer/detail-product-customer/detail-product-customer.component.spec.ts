import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProductCustomerComponent } from './detail-product-customer.component';

describe('DetailProductCustomerComponent', () => {
  let component: DetailProductCustomerComponent;
  let fixture: ComponentFixture<DetailProductCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailProductCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailProductCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
