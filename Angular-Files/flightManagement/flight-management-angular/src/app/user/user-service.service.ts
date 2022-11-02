import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  userBaseUrl: String = "http://localhost:7071/"
  adminBaseUrl: String = "http://localhost:8081/"
  constructor(public http: HttpClient , public router: Router) { }

  isSessionExist(){
    return sessionStorage.getItem("userName") ? true : false
  }

  getAllFlightDetails(){
    return this.http.get(this.adminBaseUrl + "getAllFlights", {responseType: 'json'})
  }

  searchFlights(payload: any){
    return this.http.post(this.adminBaseUrl + "searchFlight" , payload , {responseType : 'json'})
  }
}
