import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardVendeurComponent } from './dashboard-vendeur.component';

describe('DashboardVendeurComponent', () => {
  let component: DashboardVendeurComponent;
  let fixture: ComponentFixture<DashboardVendeurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardVendeurComponent]
    });
    fixture = TestBed.createComponent(DashboardVendeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
