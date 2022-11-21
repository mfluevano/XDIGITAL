import { Injectable } from '@angular/core';
import { ChallengeService } from './challenge.service';


@Injectable({
  providedIn: 'root'
})
export class ServiceTestService {

  constructor(
    private serviceApiTEst:ChallengeService

  ) { }

  public getValue(){
    this.serviceApiTEst.get();
    return 'My Value';
  }
}
