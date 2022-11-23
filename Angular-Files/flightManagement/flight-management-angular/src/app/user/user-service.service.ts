import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  userBaseUrl: String = "http://localhost:7071/"
  adminBaseUrl: String = "http://localhost:8081/"
  constructor(public http: HttpClient , public router: Router, private toastr: ToastrService) { }

  isSessionExist(){
    return localStorage.getItem("userSession") ? true : false
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

  userRegistration(payload: any){
    return this.http.post(this.userBaseUrl + 'registerUser', payload , { responseType: "json" })
  }

  userLogin(payload: any){
    return this.http.post(this.userBaseUrl + 'login', payload , { responseType: "json" })
  }

  getToasterMessage(message: any, toasterType: any , title: any = '', timeout: any = 2000){
    if (toasterType == 'success') {
      this.toastr.success(message, title, {
        timeOut: timeout,
        closeButton: true,
      })
    } else if(toasterType == 'warning'){
      this.toastr.warning(message, title, {
        timeOut: timeout,
        closeButton: true,
      })
    }else{
      this.toastr.error(message, title, {
        timeOut: timeout,
        closeButton: true,
      })
    }
  }
}
