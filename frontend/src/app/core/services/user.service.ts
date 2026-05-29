import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  login(payload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, payload);
  }

  // Requests table records with an adjustable delay tracking parameter
  getUsersWithDelay(delayMs: number): Observable<any[]> {
    const params = new HttpParams().set('delay', delayMs.toString());
    return this.http.get<any[]>(`${this.baseUrl}/users`, { params });
  }

  addUser(adminRole: string, userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/manage-users`, {
      requesterRole: adminRole,
      newUser: userData
    });
  }

  // Local Storage Helpers to retain user state across route changes
  saveSession(user: any) {
    localStorage.setItem('session_user', JSON.stringify(user));
  }

  getSession() {
    const session = localStorage.getItem('session_user');
    return session ? JSON.parse(session) : null;
  }

  clearSession() {
    localStorage.removeItem('session_user');
  }
}