import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierFormulaireComponent } from './modifier-formulaire.component';

describe('ModifierFormulaireComponent', () => {
  let component: ModifierFormulaireComponent;
  let fixture: ComponentFixture<ModifierFormulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierFormulaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifierFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
