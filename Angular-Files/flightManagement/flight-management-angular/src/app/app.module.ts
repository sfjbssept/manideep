import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './admin/home/home.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddFlightComponent } from './admin/add-flight/add-flight.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserNavbarComponent } from './user/user-navbar/user-navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { SearchflightComponent } from './user/searchflight/searchflight.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { BottomSheetOverviewExampleSheet, PreviewDetailsComponent } from './user/preview-details/preview-details.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';
import { DisplayCardComponent } from './user/display-card/display-card.component';
import { ToastrModule } from 'ngx-toastr';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { BookingHistoryComponent } from './user/booking-history/booking-history.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminNavbarComponent,
    AddFlightComponent,
    SignInComponent,
    SignUpComponent,
    UserNavbarComponent,
    PageNotFoundComponent,
    SearchflightComponent,
    PreviewDetailsComponent,
    BottomSheetOverviewExampleSheet,
    DisplayCardComponent,
    BookingHistoryComponent,
    DialogBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    CdkAccordionModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatStepperModule,
    MatBottomSheetModule,
    MatListModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    FontAwesomeModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
