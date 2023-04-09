import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTransportCompanyComponent } from './edit-transport-company.component';

describe('EditTransportCompanyComponent', () => {
  let component: EditTransportCompanyComponent;
  let fixture: ComponentFixture<EditTransportCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTransportCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTransportCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
