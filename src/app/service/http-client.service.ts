import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class HttpClientService {
  constructor(
    private http: HttpClient) {
    }
get ( url: string): Observable<any> {
    return this.http.get(url);
}

}
