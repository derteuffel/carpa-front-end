import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserDetail} from './users/user-details/user-detail';





@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  private uploadUrl = 'http://localhost:8080/api/upload';

  currentUser: UserDetail;
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.headers = new HttpHeaders({
      authorization: 'Bearer ' + this.currentUser.token,
      'Content-Type': 'application/json; charset=UTF-8'
    });
  }


  upload(file: File, id: number): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    // return this.http.post(uploadUrl + '/' + id, file);

    const req = new HttpRequest('POST', `${this.uploadUrl}/${id}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.uploadUrl}/files`, {headers: this.headers});
  }
}
