import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionUtilisatursComponent } from './gestion-utilisaturs.component';

describe('GestionUtilisatursComponent', () => {
  let component: GestionUtilisatursComponent;
  let fixture: ComponentFixture<GestionUtilisatursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionUtilisatursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionUtilisatursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
