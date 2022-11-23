import { AfterContentInit, AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { faPlaneArrival, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import * as RandExp from "randexp";
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-preview-details',
  templateUrl: './preview-details.component.html',
  styleUrls: ['./preview-details.component.css']
})
export class PreviewDetailsComponent implements OnInit, OnDestroy {
  [key: string]: any;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isOptional = true;
  selectedFlightDetails: any = [];
  // iconArrival = faPlaneArrival
  iconDeparture = faPlaneDeparture

  tax: any = 1200;
  noOfAdults: any;
  passengerValidation: any;
  totalCost: number;
  constructor(private _userAuth: UserServiceService, public router: Router, private _formBuilder: FormBuilder,
    private _bottomSheet: MatBottomSheet, private formBuilder: FormBuilder) { }

  ngOnDestroy(): void {
    // localStorage.removeItem("selectedDepartureFlight");
  }

  ngOnInit(): void {
    console.log(localStorage.getItem("selectedDepartureFlight"))
    // if (!this._userAuth.isSessionExist()) {
    //   this.router.navigate(["/user"])
    //   return
    // } else if (!sessionStorage.getItem("selectedDepartureFlight")) {
    //   //session exist but selected flight is null
    //   this.router.navigate(["/user/searchFlight"])
    //   return
    // }
    var searchPayload = JSON.parse(localStorage.getItem('searchPayload') || '{}')
    if (searchPayload.noOfAdults || localStorage.getItem("tripASelectedFlight")) {
      this.noOfAdults = searchPayload.noOfAdults
    } else {
      this.router.navigate(["/user/searchFlight"])
      return
    }
    this.passengerValidation = this.formBuilder.group({
      mobileNumber: ['', Validators.required],
      emailId: ['', Validators.required]
      // emailId: ['',Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]
    })
    for (let index = 0; index < this.noOfAdults; index++) {
      // this.passengerValidation.addControl(
      //   "passenger" + index,
      //   this.formBuilder.group({
      //     passengerName: ['', Validators.required],
      //     passengerGender: ['', Validators.required],
      //     passengerAge: ['', Validators.required]
      //   })
      // )


      this.passengerValidation.addControl("passenger-" + index + "-gender", new FormControl('', Validators.required))
      this.passengerValidation.addControl("passenger-" + index + "-name", new FormControl('', Validators.required))
      this.passengerValidation.addControl("passenger-" + index + "-age", new FormControl('', [Validators.min(18), Validators.max(99), Validators.required]))
    }
    console.log(this.passengerValidation)
    const PNR = JSON.stringify(new RandExp(/^([A-Z]){1}([0-9]){1}([A-Z]){2}([0-9]){1}([A-Z]){1}$/).gen());
    console.log(PNR, "PNR Number");
    this.selectedFlightDetails = JSON.parse(localStorage.getItem('selectedDepartureFlight') || '{}')
  }
  getHours(flightObject: any) {
    return this._userAuth.getHours(flightObject)
  }
  getMinutes(flightObject: any) {
    return this._userAuth.getMinutes(flightObject)
  }
  getBaseFare(fObj: any) {
    return fObj.ticketCost * this.noOfAdults
  }
  getTotalFare() {
    this.totalCost = 0
    var reached = false;
    this.selectedFlightDetails.forEach((element: any, i: any) => {
      this.totalCost += (parseInt(element.ticketCost) * this.noOfAdults)
      if (this.selectedFlightDetails.length - 1 == i) {
        reached = true
      }
    });
    if (reached) return this.totalCost + this.tax
    this.totalCost += this.tax
    return this.totalCost
  }
  createRange(number: any) {
    return new Array(number).fill(0)
      .map((n, index) => index + 1);
  }
  isValidationError(name: any) {
    return (this.passengerValidation.controls[name].touched && this.passengerValidation.controls[name].status == 'INVALID') ? true : false
  }
  openPaymentSheet(): void {
    this.passengerValidation.markAllAsTouched()
    if (this.passengerValidation.status == 'VALID') {
      const dialogRef = this._bottomSheet.open(PaymentBottomSheet);

      dialogRef.afterDismissed().subscribe(result => {
        if (result) {
          var passengersList = []
          var tempObj: any = {}
          for (let i = 0; i < this.noOfAdults; i++) {
            tempObj = {}
            Object.entries(this.passengerValidation.value).forEach(([key, value], index) => {
              var splitedPassengerDetails = key.split('-')
              if (key.includes(i.toString())) {
                var nameToTitleCase = splitedPassengerDetails[2].charAt(0).toUpperCase() + splitedPassengerDetails[2].slice(1)
                tempObj[splitedPassengerDetails[0] + nameToTitleCase] = value
              }
            });
            passengersList.push(tempObj)
          }

          var payload = {
            "passengersDetails": passengersList,
            "totalCost": this.getTotalFare(),
            "contactMobileNumber": this.passengerValidation.value.mobileNumber,
            "contactMailid": this.passengerValidation.value.emailId,
            "bookingFlightObj": this.selectedFlightDetails,
            "paymentMode": result
          }
          this._userAuth.bookFlight(payload).subscribe(
            r => {
              this._userAuth.getToasterMessage(r, 'success', 'Booking was successful', 10000)
              localStorage.removeItem("selectedDepartureFlight")
              localStorage.removeItem("searchPayload")
              // this.ngOnInit()
            },
            r => {
              this._userAuth.getToasterMessage('Something went wrong please try again', 'error')
            }
          )
        }
      });
    } else {
      this._userAuth.getToasterMessage('Please fill mandate details', 'warning')
    }
  }
}

@Component({
  selector: 'payment-bottom-sheet',
  templateUrl: 'payment-bottom-sheet.html',
})
export class PaymentBottomSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<PaymentBottomSheet>) { }

  paymentModeType(paymentName: any): void {
    this._bottomSheetRef.dismiss(paymentName);
  }
}
