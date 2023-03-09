import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CalendaryComponent } from './calendary/calendary.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { VigilanteGuard } from './vigilante.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomepageComponent},
  { 
    path: 'login', 
    component: LoginComponent,
    // component: AppComponent,
  },
  {
    path: 'crear-cita',
    component: CalendaryComponent,
    canActivate: [VigilanteGuard]
  }
];

@NgModule({
  imports: [[RouterModule.forRoot(routes)]],
  exports: [RouterModule],
})

export class AppRoutingModule { }