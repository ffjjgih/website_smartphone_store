import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTransportCompanyComponent } from './detail-transport-company.component';

describe('DetailTransportCompanyComponent', () => {
  let component: DetailTransportCompanyComponent;
  let fixture: ComponentFixture<DetailTransportCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailTransportCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailTransportCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
