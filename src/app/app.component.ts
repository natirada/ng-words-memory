import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'words-memory-game';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBfNIP6o2Cv0c7Vc7BM3eFAkT0k04kXwDM',
      authDomain: 'ng-word-memory.firebaseapp.com'
    });
    console.log('kkkkk');
  }
}
