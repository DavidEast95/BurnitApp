import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { NotificationService } from '../services/notification.service';

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
  private success: boolean;
  constructor(private _firebaseAuth: AngularFireAuth, private router: Router, private notifier: NotificationService) {
    this.user = _firebaseAuth.authState;
  }

  signup(email: string, password: string, name: string) {
    // clear all messages
    this.notifier.display(false, '');
    this._firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        this.sendEmailVerification();
        const message = 'A verification email has been sent, please check your email and follow the steps!';
        this.notifier.display(true, message);
        return firebase.database().ref('users/' + res.uid).set({
          email: res.email,
          uid: res.uid,
          registrationDate: new Date().toString(),
          name: name
        })
          .then(() => {
            firebase.auth().signOut();
            this.router.navigate(['login']);
          });
      })
      .catch(err => {
        console.log(err);
        this.notifier.display(true, err.message);
      });
    // this.authService.registerUser(this.registerData)
  }

  sendEmailVerification() {
    this._firebaseAuth.authState.subscribe(user => {
      user.sendEmailVerification()
        .then(() => {
          console.log('email sent');
        });
    });
  }

  login(email: string, password: string) {
    // clear all messages
    this.notifier.display(false, '');
    this._firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        if (user.emailVerified) {
          this.router.navigate(['recipes']);
          // Redirect the user here
        } else {
          const message = 'A verification email has been sent, please check your email and follow the steps!';
          this.notifier.display(true, message);
        }
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
        this.notifier.display(true, err.message);
      });
  }

  isLoggedIn() {
    if (this.user == null) {
      return false;
    } else {
      return true;
    }
  }

  logout() {
    console.log('logging out...');
    this._firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/']));
  }
}
