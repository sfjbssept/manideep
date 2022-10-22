import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  baseUrl:String = "http://localhost:8081/"
  constructor(public http: HttpClient) { }
  
  getAllFlights(){
    return this.http.get(this.baseUrl + "getAllFlights")
  }
}
