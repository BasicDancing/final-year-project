import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from './auth';

const baseUrl = "http://localhost:8081/api/masterdata/auth/user/all/info"
const loginUrl = "http://localhost:8081/authenticate";
const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));


@Injectable({
  providedIn: 'root'
})
export class UserAllInfoService {

  constructor(
    private http: HttpClient,
    ) {}

  public get(id: number): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`, {headers});
  }

  public getByUser(userName: string): Observable<any> {
    return this.http.get(`${baseUrl}/user/${userName}`, {headers});
  }

  public create(data: object): Observable<object> {
    return this.http.post(`${baseUrl}/`, data, {headers});
  }

  public login(data: object): Observable<any> {
    return this.http.post(`${loginUrl}`, data,);
  }

  public update(id: string, data: object): Observable<object> {
    return this.http.put(`${baseUrl}/${id}`, data, {headers});
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`, {headers});
  }
}
