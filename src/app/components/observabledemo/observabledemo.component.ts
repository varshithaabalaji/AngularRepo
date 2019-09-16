import { Component, OnInit } from '@angular/core';
import { ObservableService }from '../../services/observable.service';

@Component({
  selector: 'app-observabledemo',
  templateUrl: './observabledemo.component.html',
  styleUrls: ['./observabledemo.component.scss']
})
export class ObservabledemoComponent implements OnInit {
  data:any;
  numClicks :number;
  constructor(private myService : ObservableService) { }

  ngOnInit() {
    this.data=null;
    this.numClicks=0;
    this.myService.getData().subscribe(
      incomingData =>this.data=incomingData
    )
  }
  btnClicked(){
    ++this.numClicks;
  }

}
