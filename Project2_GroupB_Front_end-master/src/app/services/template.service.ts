import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  private baseUrl = 'http://localhost:8080/template';

  constructor(private http: HttpClient, private shared: SharedService) {}

  createTemplate(template: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/create.app`, template, { withCredentials: this.shared.withCred });
  }

  getTemplate(listingId: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}.app/?listing_id=${listingId}`, { withCredentials: this.shared.withCred });
  }
}
