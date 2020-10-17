import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {UserDetail} from './user-details/user-detail';
import {catchError, tap} from 'rxjs/internal/operators';


const apiUrl = 'http://localhost:8080/api/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: UserDetail;
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.headers = new HttpHeaders({
      authorization: 'Bearer ' + this.currentUser.token,
      'Content-Type': 'application/json; charset=UTF-8'
    });
  }

  getAllUsers(): Observable<UserDetail[]> {
    return this.http.get<UserDetail[]>(apiUrl,  {headers: this.headers}).pipe(
      tap(_ => this.log('fetched Users')),
      catchError(this.handleError('getUsers', []))
    );
  }

  getUser(id: number): Observable<any> {
    return this.http.get(apiUrl + '/' + id, {headers: this.headers});
  }

  changeRoles(id: number, name: string): Observable<any> {
    return this.http.get(apiUrl + '/roles/' + name + '/' + id, {headers: this.headers});
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
