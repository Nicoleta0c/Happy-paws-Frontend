import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Output, EventEmitter } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(
    private http: HttpClient, 
    private router: Router, 
    private cookieService: CookieService,
    private appService: AppService) { }

  //isSignedIn = true;

  handleLogout() {
    this.cookieService.deleteAll();
    this.appService.setIsSignedIn(false);  
    this.router.navigate(['/']);
  };

}
