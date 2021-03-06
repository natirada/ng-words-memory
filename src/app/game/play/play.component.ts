import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Card } from 'src/app/shared/card.model';
import { WordService } from 'src/app/edit/words.services';
import { RunTime } from '../runtime.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  @Input() scoreTime: number;
  @ViewChild('f') card: Element;
  firstClick = false;
  cardClickBefore: number;
  numnerOfClick = 0 ;
  cards: Card[] = [
    new Card(),
    new Card(),
    new Card(),
    new Card(),
    new Card(),
    new Card(),
    new Card(),
    new Card(),
    new Card(),
    new Card(),
    new Card(),
    new Card(),
  ];

  constructor(private wordservice: WordService,
              private runtime: RunTime) { }

  ngOnInit() {
    console.log(this.cards);
    this.wordservice.getPairWords().forEach((word, index) => {
      let flag = false;
      while (!flag) {
      const rand = Math.floor(Math.random() * Math.floor(12));
      if (!this.cards[rand].notEmpty) {
        this.cards[rand].notEmpty = true;
        this.cards[rand].indexMatch = index;
        this.cards[rand].content = word.ENword;
        flag = true ;
      }

    }
    });

    this.wordservice.getPairWords().forEach((word, index) => {
      let flag = false;
      while (!flag) {
      const rand = Math.floor(Math.random() * Math.floor(12));
      if (!this.cards[rand].notEmpty) {
        this.cards[rand].indexMatch = index;
        this.cards[rand].content = word.HEword;
        this.cards[rand].notEmpty = true;
        flag = true;
      }
    }
    });
  }

  onClick(index: number) {
    if (!this.firstClick) {
      this.firstClick = true ;
      this.runtime.clickFIrstTime();
    }
    if(this.numnerOfClick > 1) {
      return;
    }
    if ( this.cards[index].clickFlip === 'false') {
       this.cards[index].clickFlip = 'true';
    } else {
      return;
    }

    this.numnerOfClick++;
    if (this.numnerOfClick ===  1) {
      this.cardClickBefore = index;
      return;
    }

    setTimeout(() => {
    if (this.cards[index].indexMatch !== this.cards[this.cardClickBefore].indexMatch) {
      console.log('not match!!!!!!');
      this.cards[index].clickFlip = this.cards[index].clickFlip = 'false';
      this.cards[index].clickFlip = this.cards[this.cardClickBefore].clickFlip = 'false';
    } else {
      this.cards[index].matchFound = true ;
      this.cards[this.cardClickBefore].matchFound = true ;
      if (this.gameOver()) {
        console.log(this.cards);
        this.runtime.stopRunTime();
        setTimeout( () => {
          const userdata = this.wordservice.getUserData();
          if(userdata.recordTime === 0)
          {
            userdata.recordTime = this.scoreTime;
          } else {
            if(this.scoreTime < userdata.recordTime ) {
              userdata.recordTime = this.scoreTime;
            }
          }
          this.wordservice.savedata();
        }, 500);
        
      }
    }
    if (this.numnerOfClick === 2 ) {
      this.numnerOfClick =  0 ;
    }
   }, 1500);
  }

  gameOver(): boolean {
    let gameOver = true;
    for (let card of this.cards) {
      if (card.matchFound === false ) {
        gameOver = false;
        break;
      }
    }
    return gameOver;
  }

}
