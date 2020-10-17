import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/internal/operators';
import {UserPayload} from '../users/user-details/user-payload';
import {LoginPayload} from '../auth/login/login-payload';


const apiUrl = 'http://localhost:8080/api/auth/';
const apiTestUrl = 'http://localhost:8080/api/test/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private jwtToken: string;
  private roles: Array<any> = [];

  constructor(private http: HttpClient) {
  }


  login(user: LoginPayload): Observable<any> {

    return this.http.post (apiUrl + 'signin', user, httpOptions);
  }

  /*login(data: any): Observable<any> {
    return this.http.post<any>(apiUrl + 'login', data)
      .pipe(
        tap(_ => this.isLoggedIn = true),
        catchError(this.handleError('login', []))
      );
  }*/



  logOut(){
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('token') != null;
  }

  registerRoot(user: UserPayload): Observable<any> {
    return this.http.post(apiTestUrl + 'register/root', user);
  }

  registerCoordonateur(user: UserPayload): Observable<any> {
    return this.http.post(apiUrl + 'signup', user, httpOptions);
  }

  updateUser(data: any, id: number): Observable<any> {
    return this.http.post<any>(apiUrl + 'register/update/' + id, data)
      .pipe(
        tap(_ => this.log('update')),
        catchError(this.handleError('Update user', []))
      );
  }

  deleteUser(id: number): Observable<any> {
    return this.http.get(apiUrl + 'register/delete/' + id);
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
