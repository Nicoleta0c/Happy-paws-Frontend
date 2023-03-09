import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { catchError, map, Observable, throwError } from 'rxjs';
import { AppService } from '../app.service';

interface User {
  email: string | null | undefined;
  password: string | null | undefined;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  }),
  observe: 'response'
};


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private http: HttpClient, 
    private router: Router, 
    private cookieService: CookieService,
    private appService: AppService) { 
    }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  // AQUI SE DEBE CAMBIAR LA LINEA PARA QUE LLEGUE AL BACKEND DEPLOYADO
  // EL BACKEND EN LA DIRECCION NUEVA
  loginUrl = "https://nocountry-09-04-production.up.railway.app/login";

  checkLogin(user: any) {
    return this.http.post(this.loginUrl, user, {
      observe: 'response'
    })
      .pipe(
        map((response: HttpResponse<any>) => {
          const body = response.body;
          const headers = response.headers;

          const bearerToken = headers.get('Authorization')!;

          const token = bearerToken?.replace('Bearer ', '');

          this.cookieService.set("bearer_token", token, 4, '/');

          return body;
        })
      );
  }

  onSubmit() {
    this.checkLogin(this.loginForm.value)
      .subscribe(res => {
        this.appService.setIsSignedIn(true);     
        this.router.navigate(['/crear-cita']);
      });
  }

}
