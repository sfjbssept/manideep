import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  userBaseUrl: String = "http://localhost:7071/"
  constructor(public http: HttpClient , public router: Router) { }

  isSessionExist(){
    return sessionStorage.getItem("userName") ? true : false
  }
}
