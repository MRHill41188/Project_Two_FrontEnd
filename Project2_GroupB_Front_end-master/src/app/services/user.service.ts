import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/user';

  constructor(private http: HttpClient, private shared: SharedService) {}

  login(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/login.app`, user, { withCredentials: this.shared.withCred });
  }

  logout(): Observable<Object> {
    return this.http.get(`${this.baseUrl}/logout.app`, { withCredentials: this.shared.withCred });
  }
}
