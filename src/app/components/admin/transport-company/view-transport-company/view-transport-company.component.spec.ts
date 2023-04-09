import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTransportCompanyComponent } from './view-transport-company.component';

describe('ViewTransportCompanyComponent', () => {
  let component: ViewTransportCompanyComponent;
  let fixture: ComponentFixture<ViewTransportCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTransportCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTransportCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
