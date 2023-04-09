import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportCompanyComponent } from './transport-company.component';

describe('TransportCompanyComponent', () => {
  let component: TransportCompanyComponent;
  let fixture: ComponentFixture<TransportCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransportCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
