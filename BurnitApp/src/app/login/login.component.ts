import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(private auth: AuthService) { }

// Niall - handles authorisation for login

  ngOnInit() {
  }
  login() {
    this.auth.login(this.email, this.password);
    console.log(this.email);
    console.log(this.password);
    // this.authService.registerUser(this.registerData)
  }
}
