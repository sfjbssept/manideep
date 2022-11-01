import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import * as moment from 'moment';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-searchflight',
  templateUrl: './searchflight.component.html',
  styleUrls: ['./searchflight.component.css']
})
export class SearchflightComponent implements OnInit {
  flightDetails: any;

  constructor(private _auth: UserServiceService) { }
  @ViewChild(MatAccordion) accordion: MatAccordion;
  panelOpenState = false;
  time: number
  ngOnInit(): void {
    this._auth.getAllFlightDetails().subscribe(
      r => {
        this.flightDetails = r
        console.log(this.flightDetails)
      },
      r => {

      },
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

}
