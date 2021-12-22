import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';


const baseUrl = "http://localhost:8081/api/user"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  public getAll(): Observable<any> {
    return this.http.get(`${baseUrl}/`);
  }

  public get(id: number): Observable<any> {
    return this.http.get(`${baseUrl}/get/${id}`);
  }

  public getProfessonal(profession: string): Observable<any> {
    return this.http.get(`${baseUrl}/${profession}`);
  }

  public update(id: string, data: object): Observable<object> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
  
