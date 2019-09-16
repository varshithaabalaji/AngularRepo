import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
  dataStream: Observable<any>;

  constructor() { 
    this.dataStream = new Observable(
      observer =>{
        setTimeout(()=>{
          observer.next(10);
        },5000);
       
      }
      );
  }
  getData(){
    return this.dataStream;
  }
}
