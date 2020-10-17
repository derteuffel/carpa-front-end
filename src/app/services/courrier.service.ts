import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Courriers} from '../courriers/courriers';
import {catchError, tap} from 'rxjs/internal/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CourrierPayload} from '../courriers/courrier-payload';
import {UserDetail} from '../users/user-details/user-detail';


const apiUrl = 'http://localhost:8080/api/courriers';
const usersApiUrl = 'http://localhost:8080/api/users';

@Injectable({
  providedIn: 'root'
})
export class CourrierService {

  currentUser: UserDetail;
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
  }


  getCourriers(): Observable<Courriers[]> {
    return this.http.get<Courriers[]>(apiUrl,  {headers: this.headers})
      .pipe(
        tap(_ => this.log('fetched Courriers')),
        catchError(this.handleError('getCourriers', []))
      );
  }

  getCourriersByType(value: string): Observable<Courriers[]> {
    return this.http.get<Courriers[]>(apiUrl + '/type/' + value,  {headers: this.headers})
      .pipe(
        tap(_ => this.log('fetched Courriers')),
        catchError(this.handleError('getCourriers', []))
      );
  }

  getCourriersByAccount(): Observable<Courriers[]> {
    return this.http.get<Courriers[]>(apiUrl + '/users',  {headers: this.headers})
      .pipe(
        tap(_ => this.log('fetched Courriers')),
        catchError(this.handleError('getCourriers', []))
      );
  }

  createCourrier(courrierPayload: CourrierPayload): Observable<any>{
    return this.http.post<any>(apiUrl + '/save', courrierPayload,  {headers: this.headers})
      .pipe(
        tap(_ => this.log('Courrier saving...')),
        catchError(this.handleError('Save courrier', []))
      );
  }

  updateCourrier(courrierPayload: CourrierPayload, id: number): Observable<any>{
    return this.http.post(apiUrl + '/update/' + id, courrierPayload,  {headers: this.headers})
      .pipe(
        tap(_ => this.log('Courrier updated loading...')),
        catchError(this.handleError('Update courrier', []))
      );
  }

  archiverCourrier(id: number): Observable<any> {
    return this.http.get(apiUrl + '/archives/' + id,  {headers: this.headers});
  }

  getCourrierByStatus(status: boolean): Observable<any> {
    return this.http.get(apiUrl + '/status/' + status,  {headers: this.headers});
  }

  getOne(id: number): Observable<any> {
    return this.http.get(apiUrl + '/get/' + id,  {headers: this.headers});
  }

  getUserForCourrier(id: number): Observable<UserDetail[]> {
    return this.http.get<UserDetail[]>(usersApiUrl + '/courriers/' + id,  {headers: this.headers});
  }

  addUserToCourrier(utilisateurs: string[], id: number): Observable<any> {
    return this.http.post(apiUrl + '/users/add/' + id, utilisateurs,  {headers: this.headers});
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
