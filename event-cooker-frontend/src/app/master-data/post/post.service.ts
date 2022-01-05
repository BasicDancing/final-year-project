import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = "http://localhost:8081/api/masterdata/post";
const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(
    private http: HttpClient,
  ) { }

  public getAll(): Observable<any> {
    return this.http.get(`${baseUrl}/`, {headers});
  }

  public get(id: string): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`, {headers});
  }

  public getByUser(user: string): Observable<any> {
    return this.http.get(`${baseUrl}/user/${user}`, {headers});
  }

  public getByEmployee(employee: string): Observable<any> {
    return this.http.get(`${baseUrl}/employee/${employee}`, {headers});
  }

  public create(data: object): Observable<object> {
    return this.http.post(`${baseUrl}/`, data, {headers});
  }

  public update(id: string, data: object): Observable<object> {
    return this.http.put(`${baseUrl}/${id}`, data, {headers});
  }

  public approve(id: string): Observable<object> {
    return this.http.put(`${baseUrl}/approve/${id}`, null, {headers});
  }

  public assign(id: string, employee: string): Observable<object> {
    return this.http.put(`${baseUrl}/assign/${id}/${employee}`, null, {headers});
  }

  public delete(id: string): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`, {headers});
  }
}
