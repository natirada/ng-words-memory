import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
import { WordService } from './words.services';
import { PairWords } from '../shared/pair-words.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
  @ViewChild('f') SpNgForm: NgForm;
  pairWords: PairWords[];
  nati = 'myName' ;

  constructor(private wordservice: WordService) { }

  ngOnInit() {
    this.pairWords = this.wordservice.getPairWords();
    console.log(this.pairWords);
  }

  onSubmit(form: NgForm) {
   for (let i = 0; i < this.pairWords.length; i++) {
     const indexEnglishWord = 'word' + i ;
     const indexHebrewWord = 'translate' + i ;
     this.pairWords[i].ENword = form.value[indexEnglishWord];
     this.pairWords[i].HEword = form.value[indexHebrewWord];
     this.wordservice.setPairWords(this.pairWords);
   }
   this.wordservice.savedata();
  }

  onRemove(form: NgForm) {
    form.reset();
  }
}
