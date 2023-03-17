import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }

  public dataObservable = new BehaviorSubject({});
  curentObservable = this.dataObservable.asObservable();

  onSelectElement(dialogElement: any): Observable<any>{
    this.dataObservable.next(dialogElement);
    return of (dialogElement)
  }

  
}
