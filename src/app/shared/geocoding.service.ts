import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GeocodingService {

  constructor(private http: HttpClient) { }

  getAddressCodes(address): Observable<any> {
    const apiKey = 'AIzaSyDCkPzOJwRVqm6tDx6pjVjsqcGxB0vkgQc';
    const newAddress = address.replace(' ', '+');

    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + apiKey);
  }
}
