import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  endTime: number = 0;
  constructor() {}

  ngOnInit() {}

  reciveEndTime(endtime: number) {
    this.endTime = endtime;
  }
}
