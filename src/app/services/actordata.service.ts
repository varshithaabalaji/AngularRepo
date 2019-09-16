import { Injectable } from '@angular/core';
import Actor from '../model/actor.model';

@Injectable({
  providedIn: 'root'
})
export class ActordataService {
  
  actorData:Actor[];

  constructor() { 
    this.actorData=[
      {name: 'Charu',city:'zumbai',rating:8.0},
      {name: 'Amitab',city:'Mumbai',rating:9.0},
      {name: 'Rajni',city:'Chennai',rating:10.0,country:'India'}
    ];
  }
  getActors(){
    return this.actorData;
  }
  addActor(actor:Actor){
    this.actorData.push(actor);
  }
  deleteActor(index:number){
    this.actorData.splice(index,1);
  }
  updateActor(index:number,newActorData:Actor){
    this.actorData.splice(index,1,newActorData);
  }
}
