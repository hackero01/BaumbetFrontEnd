import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaumService {

  constructor(private http: HttpClient) { }
  baseURL: string = "https://localhost:44373/";

  searchFixtures(leagueId: any, date: any): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify({ "leagueId": leagueId, "date": date });
    return this.http.post(this.baseURL + 'api/Fixtures/getFixtures', body, { 'headers': headers });
  }
}
