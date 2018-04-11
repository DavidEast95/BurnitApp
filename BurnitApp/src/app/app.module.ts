import { NotificationService } from './services/notification.service';
import { AuthGuard } from './services/auth.guard';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {Input} from '@angular/core';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { MusclesComponent } from './muscles/muscles.component';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatToolbarModule, MatInputModule, MatListModule } from '@angular/material';
import { NotificationComponent } from './notification/notification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { AuthService } from './services/auth.service';
import { StarRatingComponent } from './shared/star-rating/star-rating.component';
import { DiscoverComponent } from './discover/discover.component';
import { HttpClientModule, HttpClient} from '@angular/common/http';
//import {APP_BASE_HREF} from '@angular/common';

import { ContactComponent } from './contact/contact.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'buildMuscle', component: MusclesComponent, canActivate: [AuthGuard] },
  { path: 'loseFat', component: ProductsComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent },
  { path: 'discover', component: DiscoverComponent },
  {path: 'contact', component: ContactComponent, pathMatch: 'full' }, 
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    NavbarComponent,
    ProductsComponent,
    MusclesComponent,
    HomeComponent,
    NotificationComponent,
    StarRatingComponent,
    DiscoverComponent,
    ContactComponent,
   
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    RouterModule.forRoot(routes),
    MatInputModule,
    MatListModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
  AuthService,
     AuthGuard,
      NotificationService, 
      AppComponent, 
      ReactiveFormsModule,
      FormsModule,
      FormBuilder],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
