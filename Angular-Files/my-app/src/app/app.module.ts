import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { LoggedOutScreenComponent } from './logged-out-screen/logged-out-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ManageRidersComponent } from './manage-riders/manage-riders.component';
import { ManageBikesComponent } from './manage-bikes/manage-bikes.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RideHistoryComponent } from './ride-history/ride-history.component';
import { RiderIssuesComponent } from './rider-issues/rider-issues.component';
import { ManageLocationsComponent } from './manage-locations/manage-locations.component';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogMessageComponent } from './dialog-message/dialog-message.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AboutUsComponent,
    HomeComponent,
    LoggedOutScreenComponent,
    ManageRidersComponent,
    ManageBikesComponent,
    NavBarComponent,
    RideHistoryComponent,
    RiderIssuesComponent,
    ManageLocationsComponent,
    DialogMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatSortModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
