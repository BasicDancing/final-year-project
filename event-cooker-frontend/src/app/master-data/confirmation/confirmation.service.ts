import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = "http://localhost:8081/api/masterdata/confirmation"

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {
  constructor(
    private http: HttpClient,
  ) { }

  public getAll(): Observable<any> {
    return this.http.get(`${baseUrl}/`);
  }

  public get(id: number): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  public getByUser(user: string): Observable<any> {
    return this.http.get(`${baseUrl}/user/${user}`);
  }

  public create(data: object): Observable<object> {
    return this.http.post(`${baseUrl}/`, data);
  }

  public update(id: string, data: object): Observable<object> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  public delete(id: string): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
