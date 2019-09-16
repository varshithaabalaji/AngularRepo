import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  favDish;
  data4Child;
  childFavCountry;

  constructor() { }

  ngOnInit() {
    this.favDish = '';
    this.data4Child='';
    this.childFavCountry='';
    
  }
  sendData2Child(){
    this.data4Child=this.favDish;
  }
  handleCountryEvent(event){
    this.childFavCountry=event;
  }

}
