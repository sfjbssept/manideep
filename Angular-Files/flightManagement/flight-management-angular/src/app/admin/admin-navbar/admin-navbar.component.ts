import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {
  isUserLoggedIn: boolean = false;
  isRegister : boolean = false
  isLogin : boolean = false

  constructor(private _router: Router, private _service : AdminServiceService) { }

  ngOnInit(): void {
    this.isUserLoggedIn = this._service.checkUserLoggedIn()
    this._service.changeSessionRoute()
  }
  logOut(){
    this._service.setUserSession("false")
    this.isUserLoggedIn = this._service.checkUserLoggedIn()
    this._router.navigate([''])
  }
  signUp(){
    this.isUserLoggedIn = this._service.checkUserLoggedIn()
    this.isRegister = false
  }
  signIn(){
    // sessionStorage.setItem("loggedInUser","true")
    // this._service.setUserSession("true")
    this.isUserLoggedIn = this._service.checkUserLoggedIn()
    this.isLogin = false
  }

}
