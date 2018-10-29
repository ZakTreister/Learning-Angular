import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesServiceService {

  url: string;
  constructor(private http: HttpClient) {
    this.url = "https://restcountries.eu/rest/v2/name/";
  }

  getCountries(input: string): Observable<any> {
    let getUrl = this.url + input;
    return this.http.get(getUrl);
  }
}
