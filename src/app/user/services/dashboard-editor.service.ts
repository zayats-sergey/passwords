import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardEditorService {
  someElement: any;
  constructor(
    private http : HttpClient,

  ) { }
  
  sendToMongo(somePasswordElement: any): Observable<any>{
    this.someElement = somePasswordElement;
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>(
      "http://localhost:3000/account/dashBoard",
      somePasswordElement,
      {headers: headers}
    )
  }



}
