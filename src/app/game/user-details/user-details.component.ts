import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { RunTime } from '../runtime.service';
import { WordService } from 'src/app/edit/words.services';
import { UserData } from 'src/app/shared/userdata.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Output()  timeEvent = new EventEmitter<number> ();
  myInterval;
  userdetailes: UserData;
  userName: string;
  recordUser: number;
  timePast = 0 ;

  constructor(private runTime: RunTime,
              private userdata: WordService) { }

  ngOnInit() {
    this.userdetailes = this.userdata.getUserData();
    this.userName = this.userdetailes.userName;
    this.recordUser = this.userdetailes.recordTime;
    this.runTime.clicked.subscribe(
      (flag: boolean) => {
          if (flag) {
            this.statrTime();
          }
      }
    );
    this.runTime.gameOver.subscribe(
      (flag: boolean) => {
        if (flag) {
          this.stopTime();
        }
      }
    );
  }

  stopTime() {
    clearInterval(this.myInterval);
    this.timeEvent.emit(this.timePast);
  }
  statrTime() {
    this.myInterval = setInterval(() => {
      this.timePast++;
    }, 1000);
  }
}
