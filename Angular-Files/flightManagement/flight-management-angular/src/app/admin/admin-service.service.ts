import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  baseUrl: String = "http://localhost:8081/"
  constructor(public http: HttpClient, public router: Router, private toastr: ToastrService) { }

  getAllFlights() {
    return this.http.get(this.baseUrl + "getFlightsWithAirlineName")
  }
  deleteFlightById(flightId: any) {
    return this.http.delete(this.baseUrl + "deleteFlight/" + flightId, { responseType: "text" })
  }
  editFlightById(flightId: any, payLoad: any) {
    return this.http.put(this.baseUrl + "update/" + flightId, payLoad, { responseType: "text" })
  }
  addFlight(payLoad: any) {
    return this.http.post(this.baseUrl + "addFlight", payLoad, { responseType: "json" })
  }
  checkUserLoggedIn() {
    return (sessionStorage.getItem("loggedInUser") == "true") ? true : false
  }
  updateAdminSessionRoute() {
    sessionStorage.getItem("loggedInUser") == "true" ? this.router.navigate(['/admin/home']) : this.router.navigate(['/admin'])
  }
  getAllFlightDetails() {
    return this.http.get(this.baseUrl + "getFlightsWithAirlineName", { responseType: 'json' })
  }

  searchFlights(payload: any) {
    return this.http.post(this.baseUrl + "searchFlight", payload, { responseType: 'json' })
  }

  getCities() {
    return this.http.get(this.baseUrl + "getCities", { responseType: 'json' })
  }

  getAirlineDetails() {
    return this.http.get(this.baseUrl + "airlineDetails", { responseType: 'json' })
  }

  setUserSession(sessionValue: any) {
    sessionStorage.setItem("loggedInUser", sessionValue)
  }
  getToasterMessage(message: any, title: any = '', timeout: any = 2000){
    this.toastr.success(message, title, {
      timeOut: timeout,
      closeButton: true,
    })
  }
}
