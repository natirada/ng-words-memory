import { Component, OnInit} from '@angular/core';
import { RunTime } from '../runtime.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  timePast = 0 ;
  constructor(private firstclick: RunTime) { }

  ngOnInit() {
    this.firstclick.clicked.subscribe(
      (flag: boolean) => {
          if (flag) {
            this.statrTime();
          }
      }
    );
  }

  statrTime() {
    setInterval(() => {
      this.timePast++;
    }, 1000);
  }
}
