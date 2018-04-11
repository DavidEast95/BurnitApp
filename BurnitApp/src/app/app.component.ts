import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { TechniqueServiceService } from './services/technique-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TechniqueServiceService]
})
export class AppComponent implements OnInit {
  title = 'exerciseApp';

  public ngOnInit(): void {
    const firebaseConfig = {
      apiKey: "AIzaSyCGIRunWtRYDWEoXIZdiP5izcb_30kfu3M",
    authDomain: "exerciseappwebprog4.firebaseapp.com",
    databaseURL: "https://exerciseappwebprog4.firebaseio.com",
    projectId: "exerciseappwebprog4",
    storageBucket: "exerciseappwebprog4.appspot.com",
    messagingSenderId: "323224307700"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
