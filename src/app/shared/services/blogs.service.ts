import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://royal-shield.up.railway.app';
  // private apiUrl = 'http://localhost:3000';

  getBlogs(): Observable<any> {
    return this.http.get(`${this.apiUrl}/blog`);
  }
  getBlogById(blogId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/blog/${blogId}`);
  }
}
