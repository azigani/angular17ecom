import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiginSignupComponent } from './sigin-signup.component';

describe('SiginSignupComponent', () => {
  let component: SiginSignupComponent;
  let fixture: ComponentFixture<SiginSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiginSignupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SiginSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
