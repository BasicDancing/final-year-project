import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = "http://localhost:8081/api/masterdata/post"

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(
    private http: HttpClient,
  ) { }

  public getAll(): Observable<any> {
    return this.http.get(`${baseUrl}/`);
  }

  public get(id: number): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  public getByUser(userName: string): Observable<any> {
    return this.http.get(`${baseUrl}/user/${userName}`);
  }

  public create(data: object): Observable<object> {
    return this.http.post(`${baseUrl}/`, data);
  }

  public update(id: string, data: object): Observable<object> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  public approve(id: string): Observable<object> {
    return this.http.put(`${baseUrl}/approve/${id}`, null);
  }

  public delete(id: string): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
