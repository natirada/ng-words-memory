import { Subject } from 'rxjs';

export class RunTime {
    FirstClick = false;
    StopRunTime = false;
    duringGame: number;
    clicked = new Subject<boolean>();
    gameOver = new Subject<boolean>();
    constructor() {}

    clickFIrstTime() {
        this.FirstClick = true;
        this.clicked.next(this.FirstClick);
    }

    stopRunTime() {
        this.StopRunTime = true;
        this.gameOver.next(this.StopRunTime);
    }
}