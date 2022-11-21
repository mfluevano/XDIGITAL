import { TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { ChallengeService } from './challenge.service';


describe('ChallengeService', () => {
let service: ChallengeService;

  beforeEach(() =>{
    TestBed.configureTestingModule({
      providers:[ChallengeService]
    });
    service:TestBed.inject(ChallengeService);

  });
  it('Servicio Creado', () => {
    expect(service).toBeTruthy();
  });



  describe('Call endpoint',() => {
    it('Should be return My Value',() =>{
       expect(service.get()).toBeTruthy();
    });


  });



90
});

