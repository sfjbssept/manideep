import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import FlightEntity from '../FlightEntity';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  constructor(private _auth: AdminServiceService) { }
  newFlightDetail: FlightEntity = new FlightEntity()

  ngOnInit(): void {
    // this.newFlightDetail = [{
    //   // "id": 0,
    //   "flightNumber": 0,
    //   "airLineName": "",
    //   "flyFrom": "",
    //   "flyTo": "",
    //   "startDate": "",
    //   "endDate": "",
    //   "instrumentUsed": "",
    //   "totalBusinessSeats": 0,
    //   "totalNonBusinessSeats": 0,
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
  }
  addInventory() {
    console.log(this.newFlightDetail)
    this._auth.addFlight(this.newFlightDetail).subscribe(
      r => {
        console.log(r)
      }
    )
  }

}
