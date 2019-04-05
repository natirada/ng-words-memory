import { Subject } from 'rxjs';

export class RunTime {
    FirstClick = false;
    clicked = new Subject<boolean>();
    constructor() {}

    clickFIrstTime() {
        this.FirstClick = true;
        this.clicked.next(this.FirstClick);
    }
}