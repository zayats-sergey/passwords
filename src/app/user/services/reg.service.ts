import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegService {

  constructor() { }

  checkName(login: string){
    if(login === ''){
      return false
    }else{
      return true
    }
  }

  checkEmail(email: string){
    if(email === ''){
      return false
    }else{
      return true
    }
  }

  checkPassword(password: string){
    if(password === ''){
      return false
    }else{
      return true
    }
  }


}
