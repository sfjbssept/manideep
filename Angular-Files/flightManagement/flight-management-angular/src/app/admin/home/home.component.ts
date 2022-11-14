import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private _auth: AdminServiceService, private _router: Router, private formBuilder: FormBuilder) { }
  dataSource: any
  displayedColumns?: String[]
  columnNamesManage: any = [
    { column: "flightNumber", displayLabel: "Flight Number" },
    { column: "airline_name", displayLabel: "AirLine Name" },
    { column: "startDate", displayLabel: "Start Date" },
    { column: "endDate", displayLabel: "End Date" },
    { column: "fromCityName", displayLabel: "Location From" },
    { column: "toCityName", displayLabel: "Location To" },
    { column: "stops", displayLabel: "Stops" },
    { column: "meal", displayLabel: "Meals" },
    { column: "ticketCost", displayLabel: "Ticket Cost" },
    { column: "totalBusinessSeats", displayLabel: "Total Business Seats" },
    { column: "totalNonBusinessSeats", displayLabel: "Total Non Business Seats" },
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
      airlineId: ['', Validators.required],
      flyFrom: ['', Validators.required],
      flyTo: ['', Validators.required],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      stops: ['', Validators.required],
      totalBusinessSeats: ['', Validators.required],
      totalNonBusinessSeats: ['', Validators.required],
      ticketCost: ['', Validators.required],
      meal: ['', Validators.required],
    })
    this.validation.markAsUntouched()
    this.getAllFlightDetails();
    this.getAirlineDetails()
    this.getCities()
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

  edit(index: any) {
    this.editElementId = index
  }
  delete(flightId: any) {
    this._auth.deleteFlightById(flightId).subscribe(
      r => {
        this.getAllFlightDetails();
        console.log(r)
      }
    )
  }

  cancel() {
    this.editElementId = -1
  }
  saveChanges(element: any) {
    this.dataSource.forEach((dataSourceObj: any) => {
      if (element.flightNumber == dataSourceObj.flightNumber) {
        element.airlineId = (this.airLineDetails.filter((x: any) => x.airline_id == element.airline_name))[0]?.airline_id
        element.airline_name = (this.airLineDetails.filter((x: any) => x.airline_id == element.airline_name))[0]?.airline_name
        element.flyFrom = (this.cities.filter((x: any) => x.cityId == element.fromCityName))[0]?.cityId
        element.flyTo = (this.cities.filter((x: any) => x.cityId == element.toCityName))[0]?.cityId
      }
    });
    this._auth.editFlightById(element.flightNumber, element).subscribe(
      r => {
        console.log(r)
        this.editElementId = -1
        this.getAllFlightDetails()
      }
    )
  }

  showEditBox(colObjName: any ,list: any ) {
    return list.some((x : any) => x == colObjName)
  }

}
