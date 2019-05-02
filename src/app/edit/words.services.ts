import { PairWords } from '../shared/pair-words.model';
import { OnInit, Injectable } from '@angular/core';
import { UserData } from '../shared/userdata.model';
import { ServerServices } from '../shared/server.services';
import { Subject } from 'rxjs';


@Injectable()
export class WordService implements OnInit {
    userData: UserData;
    finshFitchData = false;
    FitchData = new Subject<boolean>();
    constructor(private sreverService: ServerServices) {
        this.userData = new UserData('', 0 , null);
     }

     ngOnInit() {
     }

    loadData() {
        this.sreverService.getUserData().subscribe(
            (userdata: UserData) => {

                console.log(userdata);
                this.userData = userdata;
                this.finshFitchData = true;
                this.FitchData.next(true);
            }
        );
        console.log(this.userData);
    }

    ifLoadData() {
        return this.finshFitchData;
    }
    getUserData() {
        return this.userData;
    }
    getPairWords() {
        // return this.pairWords;
        return this.userData.pairWords;
    }
    setPairWords(i_PairWords: PairWords []) {
        this.userData.pairWords = i_PairWords;
    }

    savedata() {
        this.sreverService.storeDate(this.userData).subscribe(
            (response) => console.log(response),
            (error) => console.log(error)
          );
    }
}


