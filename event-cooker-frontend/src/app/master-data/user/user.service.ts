import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';


const baseUrl = "http://localhost:8081/api/user";
const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  public getAll(): Observable<any> {
    return this.http.get(`${baseUrl}/`, {headers});
  }

  public get(id: string): Observable<any> {
    return this.http.get(`${baseUrl}/get/${id}`, {headers});
  }

  public getProfessonal(profession: string): Observable<any> {
    return this.http.get(`${baseUrl}/${profession}`);
  }

  public update(id: string, data: object): Observable<object> {
    return this.http.put(`${baseUrl}/${id}`, data, {headers});
  }

  public approve(id: string): Observable<object> {
    return this.http.put(`${baseUrl}/approve/${id}`, null, {headers});
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`, {headers});
  }
}
  
