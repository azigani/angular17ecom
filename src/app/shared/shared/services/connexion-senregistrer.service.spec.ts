import { TestBed } from '@angular/core/testing';

import { ConnexionSenregistrerService } from './connexion-senregistrer.service';

describe('ConnexionSenregistrerService', () => {
  let service: ConnexionSenregistrerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnexionSenregistrerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
