import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private baseUrl = 'http://localhost:8080/application';

  constructor(private http: HttpClient, private shared: SharedService) {}

  createApplication(application: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/create.app`, application, { withCredentials: this.shared.withCred });
  }

  getApplications(listingId: Number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/by-listing.app/?listing_id=${listingId}`, { withCredentials: this.shared.withCred });
  }

  getPastApplication(): Observable<Object> {
    return this.http.get(`${this.baseUrl}/by-user.app`, { withCredentials: this.shared.withCred });
  }

  updateApplicationStatus(apps: Object[]): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update-status.app`, apps, { withCredentials: this.shared.withCred });
  }
}
