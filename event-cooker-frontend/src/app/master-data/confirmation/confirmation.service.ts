import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = "http://localhost:8081/api/masterdata/confirmation"
const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {
  constructor(
    private http: HttpClient,
  ) { }

  public getAll(): Observable<any> {
    return this.http.get(`${baseUrl}/`, {headers});
  }

  public get(id: number): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`, {headers});
  }

  public getByUser(user: string): Observable<any> {
    return this.http.get(`${baseUrl}/user/${user}`, {headers});
  }

  public create(data: object): Observable<object> {
    return this.http.post(`${baseUrl}/`, data, {headers});
  }

  public update(id: string, data: object): Observable<object> {
    return this.http.put(`${baseUrl}/${id}`, data, {headers});
  }

  public delete(id: string): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`, {headers});
  }
}
