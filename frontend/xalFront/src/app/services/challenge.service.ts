import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpStatusCode} from '@angular/common/http';
import {ApiResponse} from '../models/api.model'
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  constructor(
    private http: HttpClient
  ) { }
  errorManager(error: HttpErrorResponse)
  {
    switch (error.status) {
      case HttpStatusCode.Conflict:
          return throwError(()=>Error('Conflicto en servidor'));
        break;

      default:
        return throwError(()=>Error('Error desconocido'));
        break;
    }
  }
  public get(){
    return this.http.get<ApiResponse>('/');
  }
  public getContestadas(){
    return this.http.get<ApiResponse>('http://localhost:8000/api/data')
    .pipe(
      catchError((error: HttpErrorResponse) => {
        return this.errorManager(error)
      }));

  }
  public getTopReputation(){
    return this.http.get<ApiResponse>('http://localhost:8000/api/topreputation')
    .pipe(
      catchError((error: HttpErrorResponse) => {
        return this.errorManager(error)
      }));
  }
  public getLessViews(){
    return this.http.get<ApiResponse>('http://localhost:8000/api/lessview').
    pipe(
      catchError((error: HttpErrorResponse) => {
        return this.errorManager(error)
      }));;
  }
  public getOlderNew(){
    return this.http.get<ApiResponse>('http://localhost:8000/api/oldernew')
    .pipe(
      catchError((error: HttpErrorResponse) => {
        return this.errorManager(error)
      }));;
  }
  public getConsole(){
    return this.http.get<ApiResponse>('http://localhost:8000/api/console')
    .pipe(
      catchError((error: HttpErrorResponse) => {
        return this.errorManager(error)
      }));;
  }

  public getAeropuerto(){
    return this.http.get<ApiResponse>('http://localhost:8000/api/get_aeropuerto')
    .pipe(
      catchError((error: HttpErrorResponse) => {
        return this.errorManager(error)
      }));;

  }
  public getAerolinea(){
    return this.http.get<ApiResponse>('http://localhost:8000/api/get_aerolinea')
    .pipe(
      catchError((error: HttpErrorResponse) => {
        return this.errorManager(error)
      }));;

  }
  public getDia(){
    return this.http.get<ApiResponse>('http://localhost:8000/api/get_dia')
    .pipe(
      catchError((error: HttpErrorResponse) => {
        return this.errorManager(error)
      }));;

  }
  public getAfluencia(){
    return this.http.get<ApiResponse>('http://localhost:8000/api/get_afluencia')
    .pipe(
      catchError((error: HttpErrorResponse) => {
        return this.errorManager(error)
      }));;

  }
}

