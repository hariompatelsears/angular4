import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CommonService {
	private messageSource = new BehaviorSubject('default message');
    currentMessage = this.messageSource.asObservable();


  constructor() { 
	
  }
  logging(data) {
		console.log(data)
  }
    changeMessage(message: string) {
    this.messageSource.next(message)
  }
  
  isLoggedIn(): boolean {
    return false;
  }


}
