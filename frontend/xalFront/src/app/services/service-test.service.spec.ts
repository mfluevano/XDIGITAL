import { TestBed } from '@angular/core/testing';
import { ServiceTestService } from './service-test.service';
import {ChallengeService}  from './challenge.service'
import { faCcJcb } from '@fortawesome/free-brands-svg-icons';


describe('ServiceTestService', () => {


  it('should be call to getValue from  challengeService', () => {
    const ChallengeServiceSpy  = jasmine.createSpyObj('ChallengeService',['getValue']);
    ChallengeServiceSpy.getValue.and.returnValue('My Value');
    const servicio = new ServiceTestService(ChallengeServiceSpy);
    expect(servicio.getValue()).toBe('Myu Value');
    expect(servicio.getValue).toHaveBeenCalled();


  });
});

