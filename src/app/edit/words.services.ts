import { PairWords } from '../shared/pair-words.model';



export class WordService  {
    readonly amountWords = 6 ;
    pairWords: PairWords [] = [
        new PairWords('pen', 'עיפרון'),
        new PairWords('bottle', 'בקבוק'),
        new PairWords('can', 'פחית'),
        new PairWords('book', 'ספר'),
        new PairWords('closet', 'ארון בגדים'),
        new PairWords('dog', 'כלב')
    ];


    constructor() {
        // for (let i = 0 ; i < this.amountWords ; i++) {
        //     const pairword = new PairWords('goods', 'סחורה');
        //     this.pairWords.push(pairword);
        // }
     }

    getPairWords() {
        return this.pairWords;
    }
    setPairWords(i_PairWords: PairWords []) {
        this.pairWords = i_PairWords;
    }
}
