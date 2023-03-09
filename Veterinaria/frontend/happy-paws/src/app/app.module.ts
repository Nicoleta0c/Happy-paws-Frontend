import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InfobodyComponent } from './infobody/infobody.component';
import { FooterComponent } from './footer/footer.component';
import { CarrosuelComponent } from './carrosuel/carrosuel.component';
import { CalendaryComponent } from './calendary/calendary.component';
import { MapsComponent } from './maps/maps.component';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    InfobodyComponent,
    FooterComponent,
    CarrosuelComponent,
    CalendaryComponent,
    MapsComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    LeafletModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    },
    CookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
