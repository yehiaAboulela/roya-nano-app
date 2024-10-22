import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApplicationsService {
  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  postApplication(application: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/application`, application);
  }
}
