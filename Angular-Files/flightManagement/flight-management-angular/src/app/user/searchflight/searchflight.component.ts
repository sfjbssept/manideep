import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';
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
  searched: boolean = false;
  searchButtonName: string = "Search";
  defaultValue: string;
  searchedTripType: String;
  constructor(private _adminAuth: AdminServiceService, private _userAuth: UserServiceService, private _router: Router, private formBuilder: FormBuilder) { }
  @ViewChild(MatAccordion) accordion: MatAccordion;
  panelOpenState = false;
  flightStructure: FlightEntity = new FlightEntity()
  oneWayFlightDetails: any;
  twoWayFlightDetails: any;
  // date: any;
  // time: number
  cities: any = [];
  options: string[];
  selectedTripType: any = '1'

  validation: FormGroup
  ngOnInit(): void {
    if (!this._userAuth.isSessionExist()) {
      this._router.navigate(["/user"])
      return
    }
    // this.getFlights()
    this.getCities()
    this.validation = this.formBuilder.group({
      tripType: ['', Validators.required],
      flyFrom: ['', Validators.required],
      flyTo: ['', Validators.required],
      startDate: [new Date(new Date().setDate(new Date().getDate())), [Validators.required]],
      returnDate: [new Date(new Date().setDate(new Date().getDate())), [Validators.required]]
    })
    this.validation.markAsUntouched()
    // this._adminAuth.isSessionExist() ? this.isSessionExist = true : this.isSessionExist = false; 
    
  }
  getCities() {
    this._adminAuth.getCities().subscribe(
      r => {
        this.cities = r
        this.defaultValue = this.cities[0].cityId
        this.validation.get('flyFrom')?.setValue(this.defaultValue)
        this.validation.get('flyTo')?.setValue(this.defaultValue)
        this.options = this.cities.map((c: any) => "( " + c.cityShortName + " ) " + c.cityName);
        console.log(this.cities)
      }
    )
  }
  isValidationError(name: any) {
    return (this.validation.controls[name].touched && this.validation.controls[name].status == 'INVALID') ? true : false
  }
  searchFlight() {
    
    this.validation.markAllAsTouched()
    if (this.validation.status == "VALID") {
      var oneWayPayload = JSON.parse(JSON.stringify(this.flightStructure));
      var twoWayPayload = JSON.parse(JSON.stringify(this.flightStructure));
      this.searched = true
      this.searchButtonName = 'Update Search'
      oneWayPayload.flyFrom = this.validation.value['flyFrom']
      oneWayPayload.flyTo = this.validation.value['flyTo']
      oneWayPayload.startDate = this.validation.value['startDate']
      twoWayPayload.flyTo = this.validation.value['flyFrom']
      twoWayPayload.flyFrom = this.validation.value['flyTo']
      twoWayPayload.startDate = this.validation.value['returnDate']
      if (this.selectedTripType == '1') {
        //One way
        this._adminAuth.searchFlights(oneWayPayload).subscribe(
          r => {
            this.oneWayFlightDetails = r
            this.searchedTripType = '1'
          }
        )
      } else {
        //Two way, assignment will be reverse
        this.searchedTripType = '2'
        this._adminAuth.searchFlights(oneWayPayload).subscribe(
          r => {
            this.oneWayFlightDetails = r
          }
        )
        this._adminAuth.searchFlights(twoWayPayload).subscribe(
          r => {
            this.twoWayFlightDetails = r
          }
        )
        
      }
    }
  }
  getFlights() {
    this._adminAuth.getAllFlightDetails().subscribe(
      r => {
        this.oneWayFlightDetails = r
        this.searchButtonName = 'Search'
        this.searched = false
        this.validation.get('flyFrom')?.setValue('')
        this.validation.get('flyTo')?.setValue('')
        this.validation.get('startDate')?.setValue(new Date(new Date().setDate(new Date().getDate())))
        this.validation.markAsUntouched()
        console.log(this.oneWayFlightDetails)
      }
    )
  }
  swapFromAndTo() {
    const fromValue = this.validation.get('flyFrom')?.value
    const toValue = this.validation.get('flyTo')?.value
    this.validation.get('flyTo')?.setValue(fromValue)
    this.validation.get('flyFrom')?.setValue(toValue)
  }
}
