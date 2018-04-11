import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { NotificationService } from '../services/notification.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email: string;
  pwd: string;
  name: string;
  description: string;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.auth.signup(this.email, this.pwd, this.name);
    console.log(this.email);
    console.log(this.pwd);
    // this.authService.registerUser(this.registerData)
  }
}

//resetPassword(email: string) {
  // return this.afAuth.auth.sendPasswordResetEmail(email)
  //   .then(() => console.log('sent Password Reset Email!'))
  //   .catch((error) => console.log(error))
//}
