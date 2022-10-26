import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  editElementId: any;

  constructor(private _auth: AdminServiceService) { }
  dataSource: any
  displayedColumns?: String[]
  columnNamesManage: any = [
    { column: "flightNumber", displayLabel: "Flight Name" },
    { column: "airLineName", displayLabel: "AirLine Name" },
    { column: "startDate", displayLabel: "Start Date" },
    { column: "endDate", displayLabel: "End Date" },
    { column: "flyFrom", displayLabel: "Location From" },
    { column: "flyTo", displayLabel: "Location To" },
    { column: "instrumentUsed", displayLabel: "Instrument Used" },
    { column: "meal", displayLabel: "Meals" },
    { column: "ticketCost", displayLabel: "Ticket Cost" },
    { column: "totalBusinessSeats", displayLabel: "Total Business Seats" },
    { column: "totalNonBusinessSeats", displayLabel: "Total Non Business Seats" },
    { column: "manage", displayLabel: "Manage" },
    // "flightNumber","airLineName","endDate"
  ];
  isEdit: boolean = false
  isDelete: boolean = false
  ngOnInit(): void {
    this.displayedColumns = this.columnNamesManage.map((c: any) => c.column);
    this.getAllFlightDetails();
  }
  getAllFlightDetails(){
    this._auth.getAllFlights().subscribe(
      r => {
        this.dataSource = r
        console.log(this.dataSource)
      }
    )
  }
  isEditEnable() {
    this.isEdit = !this.isEdit
    this.isDelete = false
    // !this.isEdit && !this.isDelete ? delete this.columnNamesManage.column['manage'] : ""
    // console.log(this.columnNamesManage)
  }
  isDeleteEnable() {
    this.isDelete = !this.isDelete
    this.isEdit = false
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

}
