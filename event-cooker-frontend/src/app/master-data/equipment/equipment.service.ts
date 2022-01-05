import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = "http://localhost:8081/api/masterdata/equipment";
const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));


@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  constructor(
    private http: HttpClient,
  ) { }

  public getAll(): Observable<any> {
    return this.http.get(`${baseUrl}/`, {headers});
  }

  public get(id: number): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`, {headers});
  }

  public getByUser(userName: string): Observable<any> {
    return this.http.get(`${baseUrl}/user/${userName}`, {headers});
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

  public delete(id: string): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`, {headers});
  }
}
