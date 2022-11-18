import { TestBed } from '@angular/core/testing';
import { ChallengeService } from './challenge.service';


describe('ChallengeService', () => {
  let service:ChallengeService;
  beforeEach(() => {

    TestBed.configureTestingModule({});
    service = TestBed.inject(ChallengeService);
  });

  it('Servicio Creado', () => {

    expect(service).toBeTruthy();
  });



});


