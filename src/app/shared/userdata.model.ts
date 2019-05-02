import { PairWords } from './pair-words.model';

export class UserData {
    public userName: string;
    public recordTime:number = 0;
    public pairWords: PairWords [];
    constructor(username: string, recordtime: number , pairwords: PairWords []) {
        this.userName = username;
        this.recordTime = recordtime;
        this.pairWords = pairwords;
    }

}