import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  timePast = 0 ;
  constructor() { }

  ngOnInit() {

  }

  @Input() statrTime() {
    setInterval(() => {
      this.timePast++;
    }, 1000);
  }
}
