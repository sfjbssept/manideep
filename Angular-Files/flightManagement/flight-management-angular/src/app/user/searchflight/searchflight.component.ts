import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
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
  searchedFromCityName: any;
  searchedToCityName: any;
  searchPayload: any;
  constructor(private _userAuth: UserServiceService, private _router: Router, private formBuilder: FormBuilder, private _bottomSheet: MatBottomSheet) { }
  @ViewChild(MatAccordion) accordion: MatAccordion;
  panelOpenState = false;
  // flightStructure: FlightEntity = new FlightEntity()
  oneWayFlightDetails: any;
  twoWayFlightDetails: any;
  // date: any;
  // time: number
  cities: any = [];
  options: string[];
  selectedTripType: any = '1'
  iconDeparture = faPlaneDeparture
  noOfAdults: any = 1;
  validation: FormGroup
  ngOnInit(): void {
    if (!this._userAuth.isSessionExist()) {
      this._router.navigate(["/user"])
      return
    }
    this.getCities()
    this.validation = this.formBuilder.group({
      tripType: ['', Validators.required],
      flyFrom: ['', Validators.required],
      flyTo: ['', Validators.required],
      noOfAdults: [1, Validators.required],
      class: ['', Validators.required],
      startDate: [new Date(new Date().setDate(new Date().getDate())), [Validators.required]],
      returnDate: [new Date(new Date().setDate(new Date().getDate())), [Validators.required]]
    })
    this.validation.markAsUntouched()

    localStorage.removeItem("tripASelectedFlight")
    localStorage.removeItem("tripBSelectedFlight")

  }
  getCities() {
    this._userAuth.getCities().subscribe(
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
      if (!this.validation.dirty) {
        this._userAuth.getToasterMessage("Please update values to get new results", 'warning',"No change detected",5000)
      } else {
        this.searched = true
        this.searchButtonName = 'Update Search'

        this.searchedFromCityName = this.cities.filter((x: any) => x.cityId == this.validation.value['flyFrom'])[0].cityName
        this.searchedToCityName = this.cities.filter((x: any) => x.cityId == this.validation.value['flyTo'])[0].cityName

        this.searchPayload = {
          "returnDate": this.selectedTripType == '2' ? this.validation.value['returnDate'] : '',
          "startDate": this.validation.value['startDate'],
          "flyFrom": this.validation.value['flyFrom'],
          "flyTo": this.validation.value['flyTo'],
          "noOfAdults": this.validation.value['noOfAdults'],
          "classType": this.validation.value['class']
        }
        localStorage.setItem("searchPayload", JSON.stringify(this.searchPayload))
        this._userAuth.searchFlights(this.searchPayload).subscribe(
          (r: any) => {
            this.searchedTripType = this.selectedTripType == '2' ? '2' : '1'
            this.oneWayFlightDetails = JSON.parse(JSON.stringify(r.departureResp))
            this.twoWayFlightDetails = r.returnResp
          }
        )
        localStorage.removeItem("tripASelectedFlight")
        localStorage.removeItem("tripBSelectedFlight")
        this.validation.markAsPristine()
      }
    }
  }
  swapFromAndTo() {
    const fromValue = this.validation.get('flyFrom')?.value
    const toValue = this.validation.get('flyTo')?.value
    this.validation.get('flyTo')?.setValue(fromValue)
    this.validation.get('flyFrom')?.setValue(toValue)
    this.validation.markAsDirty()
  }
  openBottomSheet(): void {
    const bottomSheetResult = this._bottomSheet.open(PreviewBottomSheet);
    bottomSheetResult.afterDismissed().subscribe(
      r => {
        console.log(r)
      }
    )
  }
  bookNow() {
    var finalFlightsList = []
    var flight1 = JSON.parse(localStorage.getItem("tripASelectedFlight") || '{}')
    finalFlightsList.push(flight1)
    var flight2 = JSON.parse(localStorage.getItem("tripBSelectedFlight") || '{}')
    finalFlightsList.push(flight2)
    if (Object.keys(flight1).length != 0 && Object.keys(flight2).length != 0) {
      localStorage.setItem("selectedDepartureFlight", JSON.stringify(finalFlightsList))
      window.open("http://localhost:4200/user/preview", "_blank");
    } else {
      this._userAuth.getToasterMessage("Departure and return flight", 'warning', 'Please Select', 5000)
    }
  }
  
  changeState(event: any){
    console.log(event)
  }
}
@Component({
  selector: 'preview-bottom-sheet',
  templateUrl: 'preview-bottom-sheet.html',
})
export class PreviewBottomSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<PreviewBottomSheet>) { }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss(event);
    event.preventDefault();
  }
}