import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  baseUrl: String = "http://localhost:8081/"
  constructor(public http: HttpClient) { }

  getAllFlights() {
    return this.http.get(this.baseUrl + "getAllFlights")
  }
  deleteFlightById(flightId: any) {
    return this.http.delete(this.baseUrl + "deleteFlight/" + flightId , {responseType: "text"})
  }
  editFlightById(flightId: any , payLoad: any) {
    return this.http.put(this.baseUrl + "update/" + flightId , payLoad , {responseType: "text"})
  }
  addFlight(payLoad: any) {
    return this.http.post(this.baseUrl + "addFlight", payLoad , {responseType: "json"})
  }
}
