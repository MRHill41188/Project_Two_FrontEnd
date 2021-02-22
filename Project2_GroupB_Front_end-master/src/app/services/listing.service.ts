import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  private baseUrl = 'http://localhost:8080/listing';

  constructor(private http: HttpClient, private shared: SharedService) { }

  getListing(id: Number): Observable<Object> {
    return this.http.get(`${this.baseUrl}.app/?id=${id}`, { withCredentials: this.shared.withCred });
  }

  search(page: Number, type: any, city: String, state: String): Observable<Object> {
    return this.http.get(`${this.baseUrl}/search.app/?page=${page}&type=${type}&city=${city}&state=${state}`, { withCredentials: this.shared.withCred });
  }

  getPastListing(): Observable<Object> {
    return this.http.get(`${this.baseUrl}/find-by-user.app`, { withCredentials: this.shared.withCred });
  }

  createListing(listing: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/create.app`, listing, { withCredentials: this.shared.withCred });
  }

  uploadAWSS3(uploadUrl, contentType, file): Observable<any> { //this will be used to upload all csv  files to AWS S3

    const headers = new HttpHeaders({ 'Content-Type': contentType });
    const req = new HttpRequest('PUT', uploadUrl, file,
      {
        headers: headers,
      });
    return this.http.request(req);
  }

  // getAllListings(): Observable<any> {
  //     return this.http.get(`${this.baseUrl}`);
  // }
}
