import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Account } from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(
    private http: HttpClient,
  ) {
  }

  getWeather(): Observable<any> {
    const _url = '/assets/php/weather.php';
    return this.http.post<any>(_url, '', this.httpOptions);
  }
}
