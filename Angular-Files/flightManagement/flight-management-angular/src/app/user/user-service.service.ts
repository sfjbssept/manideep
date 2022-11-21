import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  userBaseUrl: String = "http://localhost:7071/"
  adminBaseUrl: String = "http://localhost:8081/"
  constructor(public http: HttpClient , public router: Router) { }

  isSessionExist(){
    return localStorage.getItem("userName") ? true : false
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

  bookFlight(bookingPayload: any){
    return this.http.post(this.adminBaseUrl + 'flight/booking' , bookingPayload, { responseType: "text" })
  }
}
