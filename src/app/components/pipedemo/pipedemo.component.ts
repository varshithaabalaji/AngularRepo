import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.scss']
})
export class PipedemoComponent implements OnInit {
  text:string;
  today:Date;
  price: number;
  student;

  constructor() { }

  ngOnInit() {
    this.text='';
    this.today = new Date();
    this.price=34.7;
    this.student={
      name:'Abcd',
      cgpa:4.5

    }
  }

}
