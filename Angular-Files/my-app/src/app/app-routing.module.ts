import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoggedOutScreenComponent } from './logged-out-screen/logged-out-screen.component';
import { LoginComponent } from './login/login.component';
import { ManageBikesComponent } from './manage-bikes/manage-bikes.component';
import { ManageLocationsComponent } from './manage-locations/manage-locations.component';
import { ManageRidersComponent } from './manage-riders/manage-riders.component';
import { RideHistoryComponent } from './ride-history/ride-history.component';
import { RiderIssuesComponent } from './rider-issues/rider-issues.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  // {path:"", component: LoginComponent},
  {path:"login", component: LoginComponent},
  {path:"signup", component: SignupComponent},
  {path:"home", component: HomeComponent},
  {path:"manage-riders", component: ManageRidersComponent},
  {path:"manage-bikes", component: ManageBikesComponent},
  {path:"Ride-History", component: RideHistoryComponent},
  {path:"Rider-Issues", component: RiderIssuesComponent},
  {path:"Manage-Locations", component: ManageLocationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
