import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayeurDashboardComponent } from './payeur-dashboard.component';

describe('PayeurDashboardComponent', () => {
  let component: PayeurDashboardComponent;
  let fixture: ComponentFixture<PayeurDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayeurDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PayeurDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
