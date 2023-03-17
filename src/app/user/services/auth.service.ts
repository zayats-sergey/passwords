import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  public dataObservable = new  BehaviorSubject('');
  currenObservable = this.dataObservable.asObservable();

  registerUser(user: any): Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>(
      "http://localhost:3000/account/regUser",
      // "account/reg",
      user,
      {headers: headers}
    )
  }

  authUser(user: any): Observable<any>{

    const data = user.login;
    console.log(data);
    this.dataObservable.next(data);
    
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>(
      "http://localhost:3000/account/authUser",
      // "account/reg",
      user,
      {headers: headers}
    )
  }

  token: any;
  user: any;
  storeUser(user: any, token: any){
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
    this.token = token;
  }

  logout(){
    this.token = null;
    this.user = null;
    localStorage.clear();
  }

  isLoggedIn() {
    // console.log( tokenNotExpired());
    return tokenNotExpired();
  }



}
