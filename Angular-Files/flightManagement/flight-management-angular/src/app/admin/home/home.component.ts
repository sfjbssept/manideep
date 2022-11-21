import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogBoxComponent } from 'src/app/dialog-box/dialog-box.component';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  editElementId: Number = -1;
  isLoggedIn: boolean = false;
  airLineDetails: any;
  cities: any;
  validation: any;
  dialogDataJson: any;

  constructor(private _auth: AdminServiceService, private _router: Router, private formBuilder: FormBuilder, public dialog: MatDialog) { }
  dataSource: any
  displayedColumns?: String[]
  columnNamesManage: any = [
    { column: "flightNumber", displayLabel: "Flight Number" },
    { column: "airline_name", displayLabel: "AirLine Name" },
    { column: "startDate", displayLabel: "Departure" },
    { column: "endDate", displayLabel: "Arrival" },
    { column: "fromCityName", displayLabel: "Location From" },
    { column: "toCityName", displayLabel: "Location To" },
    { column: "stops", displayLabel: "Stops" },
    { column: "meal", displayLabel: "Meals" },
    { column: "ticketCost", displayLabel: "Price" },
    { column: "availableSeats", displayLabel: "Available Seats" },
    { column: "classType", displayLabel: "Class Type" },
    { column: "cabinBag", displayLabel: "Cabin Bag" },
    { column: "checkIn", displayLabel: "Check In" },
    { column: "actions", displayLabel: "Actions" },
  ];
  isEdit: boolean = false
  isDelete: boolean = false
  ngOnInit(): void {
    if (this._auth.checkUserLoggedIn()) {
      this._router.navigate(['/admin/home'])
      this.isLoggedIn = true
    } else {
      this._router.navigate(['/admin']);
      this.isLoggedIn = false
      return;
    }
    this.displayedColumns = this.columnNamesManage.map((c: any) => c.column);
    this.validation = this.formBuilder.group({
      flightNumber: ['', Validators.required],
      // airlineId: ['', Validators.required],
      airline_name: ['', Validators.required],
      fromCityName: ['', Validators.required],
      // flyFrom: ['', Validators.required],
      toCityName: ['', Validators.required],
      // flyTo: ['', Validators.required],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      stops: ['', Validators.required],
      availableSeats: ['', Validators.required],
      classType: ['', Validators.required],
      checkIn: ['', Validators.required],
      cabinBag: ['', Validators.required],
      ticketCost: ['', Validators.required],
      meal: ['', Validators.required],
    })
    this.validation.markAsUntouched()
    this.getAirlineDetails()
    this.getCities()
    this.getAllFlightDetails();
    // this.showEditBox('input')
  }
  getAllFlightDetails() {
    this._auth.getAllFlights().subscribe(
      r => {
        this.dataSource = r
        console.log(this.dataSource)
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
  getCities() {
    this._auth.getCities().subscribe(
      r => {
        this.cities = r
      }
    )
  }
  isEditEnable() {
    this.isEdit = !this.isEdit
    this.isDelete = false
    this.editElementId = -1
  }
  isDeleteEnable() {
    this.isDelete = !this.isDelete
    this.isEdit = false
    this.editElementId = -1
  }

  edit(index: any, elementObject: any) {
    // this.dialogDataJson = {
    //   dialogType: "data",
    //   dialogData: ""
    // }
    // const dialogRef = this.dialog.open(DialogBoxComponent, {
    //   width: '100%',
    //   data: this.dialogDataJson,
    // });
    // dialogRef.afterClosed().subscribe(result => {

    // })
    this.editElementId = index
    this.validation.get('airline_name').setValue(elementObject.airlineId)
    this.validation.get('endDate').setValue(elementObject.endDate)
    this.validation.get('flightNumber').setValue(elementObject.flightNumber)
    this.validation.get('fromCityName').setValue(elementObject.fromCityId)
    this.validation.get('toCityName').setValue(elementObject.toCityId)
    this.validation.get('meal').setValue(elementObject.meal)
    this.validation.get('startDate').setValue(elementObject.startDate)
    this.validation.get('stops').setValue(elementObject.stops)
    this.validation.get('ticketCost').setValue(elementObject.ticketCost)
    this.validation.get('classType').setValue(elementObject.classType)
    this.validation.get('availableSeats').setValue(elementObject.availableSeats)
    this.validation.get('checkIn').setValue(elementObject.checkIn)
    this.validation.get('cabinBag').setValue(elementObject.cabinBag)
    this.validation.markAsPristine()
  }
  delete(flightId: any) {
    this.dialogDataJson = {
      dialogType: "deleteDialog",
      dialogData: ""
    }
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data: this.dialogDataJson,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == 'yes'){
        this._auth.deleteFlightById(flightId).subscribe(
          r => {
            this.getAllFlightDetails();
            this._auth.getToasterMessage('Successfully Deleted', 'success')
          },
          r => {
            this._auth.getToasterMessage('Oops! Please try again', 'error')
          }
        )
      }
    });
  }

  cancel() {
    this.editElementId = -1
  }
  saveChanges(element: any) {
    console.log(this.validation)
    this.validation.markAllAsTouched()
    if (this.validation.status == "VALID") {
      if (this.validation.dirty) {
        this.validation.value.airlineId = this.validation.value.airline_name
        this.validation.value.flyFrom = this.validation.value.fromCityName
        this.validation.value.flyTo = this.validation.value.toCityName
        // this.dataSource.forEach((dataSourceObj: any) => {
        //   if (element.flightNumber == dataSourceObj.flightNumber) {
        //     element.airlineId = (this.airLineDetails.filter((x: any) => x.airline_id == element.airline_name))[0]?.airline_id
        //     element.airline_name = (this.airLineDetails.filter((x: any) => x.airline_id == element.airline_name))[0]?.airline_name
        //     element.flyFrom = (this.cities.filter((x: any) => x.cityId == element.fromCityName))[0]?.cityId
        //     element.flyTo = (this.cities.filter((x: any) => x.cityId == element.toCityName))[0]?.cityId
        //   }
        // });
        this._auth.editFlightById(element.flightNumber, this.validation.value).subscribe(
          r => {
            console.log(r)
            this.editElementId = -1
            this.getAllFlightDetails()
            this._auth.getToasterMessage('Successfully updated', 'success')
          },
          r => {
            this._auth.getToasterMessage('Oops! Please try again', 'error')
          }
        )
      } else {
        this._auth.getToasterMessage('No changes to update', 'warning')
      }
    } else {
      this._auth.getToasterMessage('Please fill required details', 'error')
    }
  }
  isValidationError(name: any) {
    return (this.validation.controls[name].touched && this.validation.controls[name].status == 'INVALID') ? true : false
  }
  showEditBox(colObjName: any, list: any) {
    return list.some((x: any) => x == colObjName)
  }

}
