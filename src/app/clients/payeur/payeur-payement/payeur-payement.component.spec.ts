import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayeurPayementComponent } from './payeur-payement.component';

describe('PayeurPayementComponent', () => {
  let component: PayeurPayementComponent;
  let fixture: ComponentFixture<PayeurPayementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayeurPayementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PayeurPayementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
