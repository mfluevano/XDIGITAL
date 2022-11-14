import { TestBed } from '@angular/core/testing';
import { ChallengeService } from './challenge.service';


fdescribe('ChallengeService', () => {
  let service = new ChallengeServic;
  beforeEach(() => {

    TestBed.configureTestingModule({});
    service = TestBed.inject(ChallengeService);
  });

  it('Servicio Creado', () => {

    expect(service).toBeTruthy();
  });



});


