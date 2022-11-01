import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFlightComponent } from './admin/add-flight/add-flight.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { HomeComponent } from './admin/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchflightComponent } from './user/searchflight/searchflight.component';
import { UserNavbarComponent } from './user/user-navbar/user-navbar.component';

const routes: Routes = [
  {path:"admin",component:AdminNavbarComponent},
  {path:"admin/home",component:HomeComponent},
  {path:"admin/addFlight",component:AddFlightComponent},
  {path:"user",component:UserNavbarComponent},
  {path:"user/searchFlight",component:SearchflightComponent},
  {path:"**",component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
