import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  editElementId: any;
  isLoggedIn: boolean = false;
  airLineDetails: any;
  cities: any;

  constructor(private _auth: AdminServiceService, private _router: Router) { }
  dataSource: any
  displayedColumns?: String[]
  columnNamesManage: any = [
    { column: "flightNumber", displayLabel: "Flight Name" },
    { column: "airlineId", displayLabel: "AirLine Name" },
    { column: "startDate", displayLabel: "Start Date" },
    { column: "endDate", displayLabel: "End Date" },
    { column: "flyFrom", displayLabel: "Location From" },
    { column: "flyTo", displayLabel: "Location To" },
    { column: "instrumentUsed", displayLabel: "Instrument Used" },
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
    this.getAllFlightDetails();
    this.getAirlineDetails()
    this.getCities()
  }
  getAllFlightDetails() {
    this._auth.getAllFlights().subscribe(
      r => {
        this.dataSource = r
        console.log(this.dataSource)
      }
    )
  }
  getAirlineDetails(){
    this._auth.getAirlineDetails().subscribe(
      r => {
        this.airLineDetails = r
      }
    )
  }
  getCities(){
    this._auth.getCities().subscribe(
      r => {
        this.cities = r
      }
    )
  }
  isEditEnable() {
    this.isEdit = !this.isEdit
    this.isDelete = false
    this.editElementId = ""
  }
  isDeleteEnable() {
    this.isDelete = !this.isDelete
    this.isEdit = false
    this.editElementId = ""
  }

  edit(element: any) {
    this.editElementId = element.id
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
    this.editElementId = ""
  }
  saveChanges(element: any) {
    this._auth.editFlightById(element.flightNumber, element).subscribe(
      r => {
        console.log(r)
        this.editElementId = ""
      }
    )
  }

}
