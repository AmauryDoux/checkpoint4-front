import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreensService {

  constructor(private http: HttpClient) { }

  url = environment.url + '/screens/';
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  getAllScreens(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  getScreen(id: number): Observable<any> {
    return this.http.get<any>(this.url + id);
  }

  updateScreen(id: number): Observable<any> {
    return this.http.put(this.url + id, this.options);
  }

  createScreen(params): Observable<any> {
    return this.http.post(this.url, params, this.options);
  }

  deleteScreen(id): Observable<any> {
    return this.http.delete(this.url + id, this.options);
  }
}
