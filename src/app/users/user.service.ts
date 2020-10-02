import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {UserDetail} from './user-details/user-detail';
import {catchError, tap} from 'rxjs/internal/operators';


const apiUrl = 'http://localhost:8080/api/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<UserDetail[]> {
    return this.http.get<UserDetail[]>(apiUrl).pipe(
      tap(_ => this.log('fetched Users')),
      catchError(this.handleError('getUsers', []))
    );
  }

  getUser(id: number): Observable<any> {
    return this.http.get(apiUrl + '/' + id);
  }

  changeRoles(id: number, name: string): Observable<any> {
    return this.http.get(apiUrl + '/roles/' + name + '/' + id);
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
