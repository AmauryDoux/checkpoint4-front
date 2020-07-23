import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }

  url = environment.url + '/clients/';
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  getAllClients(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  getClient(id: number): Observable<any> {
    return this.http.get<any>(this.url + id);
  }

  updateClient(id: number): Observable<any> {
    return this.http.put(this.url + id, this.options);
  }

  createClient(params): Observable<any> {
    return this.http.post(this.url, this.options), params;
  }
}
