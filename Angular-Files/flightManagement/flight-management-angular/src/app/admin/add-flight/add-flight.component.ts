import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminServiceService } from '../admin-service.service';
import FlightEntity from '../FlightEntity';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {
  cities: any;
  airLineDetails: any;
  validation: any;

  constructor(private _auth: AdminServiceService, private _router: Router, private formBuilder: FormBuilder) { }
  newFlightDetail: FlightEntity = new FlightEntity()

  ngOnInit(): void {
    if (this._auth.checkUserLoggedIn()) {
      this._router.navigate(['/admin/addFlight'])
      // this.isLoggedIn = true 
    } else {
      this._router.navigate(['/admin']);
      // this.isLoggedIn = false
      return;
    }

    this.validation = this.formBuilder.group({
      flightNumber: ['', Validators.required],
      airlineId: ['', Validators.required],
      flyFrom: ['', Validators.required],
      flyTo: ['', Validators.required],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      stops: ['', Validators.required],
      classType: ['', Validators.required],
      availableSeats: ['', Validators.required],
      ticketCost: ['', Validators.required],
      meal: ['', Validators.required],
      checkIn: ['', Validators.required],
      cabinBag: ['', Validators.required],
    })
    this.validation.markAsUntouched()
    // this.newFlightDetail = [{
    //   // "id": 0,
    //   "flightNumber": 0,
    //   "airLineName": "",
    //   "flyFrom": "",
    //   "flyTo": "",
    //   "startDate": "",
    //   "endDate": "",
    //   "instrumentUsed": "",
    //   "classType": 0,
    //   "availableSeats": 0,
    //   "ticketCost": 0,
    //   "meal": ""
    // }]

    // IndiGo.
    // Air India. 
    // SpiceJet.
    // Go First.
    // AirAsia India.
    // Vistara.
    // Alliance Air.
    // TruJet.

    console.log(this.newFlightDetail)
    this.getCities()
    this.getAirlineDetails()
  }
  isValidationError(name: any) {
    return (this.validation.controls[name].touched && this.validation.controls[name].status == 'INVALID') ? true : false
  }
  addInventory() {
    console.log(this.newFlightDetail)
    this.validation.markAllAsTouched()
    if (this.validation.status == "VALID") {
      this._auth.addFlight(this.validation.value).subscribe(
        r => {
          console.log(r)
          this.validation.reset()
          this._auth.getToasterMessage('Flight details added', 'success')
        },
        r => {
          this._auth.getToasterMessage('Oops! Please try again', 'error')
        }
      )
    }
  }
  getCities() {
    this._auth.getCities().subscribe(
      r => {
        this.cities = r
      }
    )
  }

  getAirlineDetails() {
    this._auth.getAirlineDetails().subscribe(
      r => {
        this.airLineDetails = r
      }
    )
  }

}
