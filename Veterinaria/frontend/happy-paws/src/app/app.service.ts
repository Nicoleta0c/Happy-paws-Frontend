import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private isSignedIn = new BehaviorSubject(false);
  getIsSignedIn = this.isSignedIn.asObservable();

  constructor() { }

  setIsSignedIn(userState: boolean) {
    this.isSignedIn.next(userState);
  };
  
}
