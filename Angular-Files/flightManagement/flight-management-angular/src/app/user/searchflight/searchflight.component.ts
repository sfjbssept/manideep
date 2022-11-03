import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';
import * as moment from 'moment';
import FlightEntity from 'src/app/admin/FlightEntity';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-searchflight',
  templateUrl: './searchflight.component.html',
  styleUrls: ['./searchflight.component.css']
})
export class SearchflightComponent implements OnInit {
  flightDetails: any;
  date: any;
  constructor(private _auth: UserServiceService, private _router: Router, private formBuilder: FormBuilder) { }
  @ViewChild(MatAccordion) accordion: MatAccordion;
  panelOpenState = false;
  flightStructure: FlightEntity = new FlightEntity()
  time: number

  validation: FormGroup
  ngOnInit(): void {
    if (!this._auth.isSessionExist()) {
      this._router.navigate(["/user"])
      return
    }
    this.validation = this.formBuilder.group({
      flyFrom: ['', Validators.required],
      flyTo: ['', Validators.required],
      startDate: [new Date(new Date().setDate(new Date().getDate())) , [Validators.required]]
    })
    this.validation.markAsUntouched()
    // this._auth.isSessionExist() ? this.isSessionExist = true : this.isSessionExist = false; 
    this._auth.getAllFlightDetails().subscribe(
      r => {
        this.flightDetails = r
        console.log(this.flightDetails)
      },
      r => {

      },
    )
  }
  getDays(flightObject: any) {
    var time = new Date(flightObject.endDate).getTime() - new Date(flightObject.startDate).getTime();
    return moment.duration(time).days() == 0 ? "" : moment.duration(time).days() + "d"
  }
  getHours(flightObject: any) {
    var time = new Date(flightObject.endDate).getTime() - new Date(flightObject.startDate).getTime();
    return moment.duration(time).hours() == 0 ? "" : moment.duration(time).hours() + "h";
  }
  getMinutes(flightObject: any) {
    var time = new Date(flightObject.endDate).getTime() - new Date(flightObject.startDate).getTime();
    return moment.duration(time).minutes() == 0 ? "" : moment.duration(time).minutes() + "m";
  }
  isValidationError(name: any) {
    return (this.validation.controls[name].touched && this.validation.controls[name].status == 'INVALID') ? true : false
  }
  searchFlight() {
    var payload = this.flightStructure;
    this.validation.markAllAsTouched()
    if (this.validation.status == "VALID") {
      payload.flyFrom = this.validation.value['flyFrom']
      payload.flyTo = this.validation.value['flyTo']
      payload.startDate = this.validation.value['startDate']
      this._auth.searchFlights(payload).subscribe(
        r => {
          this.flightDetails = r
        }
      )
    }
  }

}
