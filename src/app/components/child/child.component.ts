import { Component, OnInit, Output } from '@angular/core';
import {Input}from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() parentFavDish;
  @Output() countryEvent =  new EventEmitter();
  favCountry;

  constructor() { }

  ngOnInit() {
    this.favCountry='';
  }
  sendData2Parent(){
    this.countryEvent.emit(this.favCountry);
  }

}
