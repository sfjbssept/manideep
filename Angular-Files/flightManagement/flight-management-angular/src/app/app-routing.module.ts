import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFlightComponent } from './admin/add-flight/add-flight.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { HomeComponent } from './admin/home/home.component';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"addFlight",component:AddFlightComponent},
  // {path:"signIn",component:SignInComponent},
  // {path:"signUp",component:SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
