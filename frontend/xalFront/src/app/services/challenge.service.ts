import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ApiResponse} from '../models/api.model'
import { retry, catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  constructor(
    private http: HttpClient
  ) { }

  public get(){
    return this.http.get<ApiResponse>('/');
  }
  public getContestadas(){
    return this.http.get<ApiResponse>('/api/data');
  }
  public getTopReputation(){
    return this.http.get<ApiResponse>('/api/topreputation');
  }
  public getLessViews(){
    return this.http.get<ApiResponse>('/api/lessview');
  }
  public getOlderNew(){
    return this.http.get<ApiResponse>('/api/oldernew');
  }
  public getConsole(){
    return this.http.get<ApiResponse>('/api/console');
  }

  public getAeropuerto(){
    return this.http.get<ApiResponse>('/api/get_aeropuerto');

  }
  public getAerolinea(){
    return this.http.get<ApiResponse>('/api/get_aerolinea');

  }
  public getDia(){
    return this.http.get<ApiResponse>('/api/get_dia');

  }
  public getAfluencia(){
    return this.http.get<ApiResponse>('/api/get_afluencia');

  }
}

