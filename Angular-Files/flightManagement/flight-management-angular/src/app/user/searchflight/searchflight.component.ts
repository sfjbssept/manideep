import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { map, startWith } from 'rxjs';
import { AdminServiceService } from 'src/app/admin/admin-service.service';
import FlightEntity from 'src/app/admin/FlightEntity';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-searchflight',
  templateUrl: './searchflight.component.html',
  styleUrls: ['./searchflight.component.css']
})
export class SearchflightComponent implements OnInit {
  searched: boolean;
  searchButtonName: string;
  constructor(private _adminAuth: AdminServiceService, private _userAuth: UserServiceService, private _router: Router, private formBuilder: FormBuilder) { }
  @ViewChild(MatAccordion) accordion: MatAccordion;
  panelOpenState = false;
  flightStructure: FlightEntity = new FlightEntity()
  flightDetails: any;
  // date: any;
  // time: number
  cities: any = [];
  options: string[];


  validation: FormGroup
  ngOnInit(): void {
    if (!this._userAuth.isSessionExist()) {
      this._router.navigate(["/user"])
      return
    }
    this.validation = this.formBuilder.group({
      flyFrom: ['', Validators.required],
      flyTo: ['', Validators.required],
      startDate: [new Date(new Date().setDate(new Date().getDate())), [Validators.required]]
    })
    this.validation.markAsUntouched()
    // this._adminAuth.isSessionExist() ? this.isSessionExist = true : this.isSessionExist = false; 
    this.getFlights()
    this.getCities()

  }
  getCities() {
    this._adminAuth.getCities().subscribe(
      r => {
        this.cities = r
        this.options = this.cities.map((c: any) => "( " + c.cityShortName + " ) " + c.cityName);
        console.log(this.cities)
      }
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
      this.searched = true
      this.searchButtonName = 'Update Search'
      payload.flyFrom = this.validation.value['flyFrom']
      payload.flyTo = this.validation.value['flyTo']
      payload.startDate = this.validation.value['startDate']
      this._adminAuth.searchFlights(payload).subscribe(
        r => {
          this.flightDetails = r
        }
      )
    }
  }
  getFlights() {
    this._adminAuth.getAllFlightDetails().subscribe(
      r => {
        this.flightDetails = r
        this.searchButtonName = 'Search'
        this.searched = false
        this.validation.get('flyFrom')?.setValue('')
        this.validation.get('flyTo')?.setValue('')
        this.validation.get('startDate')?.setValue(new Date(new Date().setDate(new Date().getDate())))
        this.validation.markAsUntouched()
        console.log(this.flightDetails)
      }
    )
  }
  swapFromAndTo() {
    const fromValue = this.validation.get('flyFrom')?.value
    const toValue = this.validation.get('flyTo')?.value
    this.validation.get('flyTo')?.setValue(fromValue)
    this.validation.get('flyFrom')?.setValue(toValue)
  }

  sendToPreview(flightObject: any){
    sessionStorage.setItem("selectedFlight",JSON.stringify(flightObject))
  }
}
