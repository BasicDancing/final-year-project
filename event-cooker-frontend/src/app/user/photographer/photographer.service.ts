import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';


const baseUrl = "http://localhost:8081/api/masterdata/user/photographer/get-all"

@Injectable({
  providedIn: 'root'
})
export class PhotographerService {

  constructor(private http: HttpClient) {}

  public getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  // public get(id: number): Observable<any> {
  //   return this.http.get(`${baseUrl}/get/${id}`);
  // }

  // public create(data: object): Observable<object> {
  //   return this.http.post(`${baseUrl}/add`, data);
  // }

  // public update(id: string, data: object): Observable<object> {
  //   return this.http.put(`${baseUrl}/update`, data);
  // }

  // public delete(id: number): Observable<any> {
  //   return this.http.delete(`${baseUrl}/delete/${id}`);
  // }

  // public deleteAll(): Observable<any> {
  //   return this.http.delete(`${baseUrl}/delete-all`);
  // }
}
