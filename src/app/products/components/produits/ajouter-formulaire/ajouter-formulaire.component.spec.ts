import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterFormulaireComponent } from './ajouter-formulaire.component';

describe('AjouterFormulaireComponent', () => {
  let component: AjouterFormulaireComponent;
  let fixture: ComponentFixture<AjouterFormulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterFormulaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjouterFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
