import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalshareService {

  constructor() { }
  private subject = new BehaviorSubject<any>('');

  sendClickEvent(id:any) {
    this.subject.next(id);
 
  }
  getClickEvent(): Observable<any> { 
    return this.subject.asObservable();

  }
}
