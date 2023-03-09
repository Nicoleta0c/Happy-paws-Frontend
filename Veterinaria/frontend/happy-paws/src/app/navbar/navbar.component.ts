import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  open = false;
  signedIn = false;

  constructor(
    private viewPortscroller: ViewportScroller, 
    private cookieService: CookieService,
    private appService: AppService) {
      this.appService.getIsSignedIn.subscribe(value => this.signedIn = value);
  }

  ngOnInit(): void {
  }

  // toggleMobileMenu() {
  //   this.mobileMenuOpen = !this.mobileMenuOpen;
  // }

  // signIn() {
  //   if (this.cookieService.check('bearer_token')) {
  //     this.appService.setIsSignedIn(true);
  //   }
  // }

  scrollToElement(elementId: string): void {
    document.getElementById(elementId)!.scrollIntoView({
      behavior: 'smooth',
    });
  }
}
