import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient,

  ) { }

  getProduct():Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<any>(
      "http://localhost:3000/account/dashBoard/allComponents",
      {headers: headers}
    )
  }

  public dataObservableElementDell = new BehaviorSubject({});
  curentObservableElementDell = this.dataObservableElementDell.asObservable();

  dellElement(element: any): Observable<any>{
    this.dataObservableElementDell.next(element);
    console.log( element._id);
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      return this.http.delete<any>(
        "http://localhost:3000/account/dashBoard/" + element._id,
        {headers: headers}
      )
  }


}
