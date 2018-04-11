import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  constructor(private auth: AuthService) { }

  //  Login functions
  userLoggedIn() {
    this.isLoggedIn = this.auth.isLoggedIn();
  }

  onLogout() {
    this.auth.logout();
  }

  ngOnInit() {
    this.isLoggedIn = this.auth.isLoggedIn();
  }

}
