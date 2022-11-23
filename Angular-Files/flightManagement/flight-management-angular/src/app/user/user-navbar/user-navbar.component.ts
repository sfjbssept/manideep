import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {

  constructor(private _auth : UserServiceService , private _router : Router ) { }
  showLoginCard: boolean = true
  isUserLoggedIn: boolean = false
  navBarTitleName: string = "Book Your Flight"
  ngOnInit(): void {
    this._auth.isSessionExist() ? this.signIn() : this.logOut()
    // if(!this._auth.isSessionExist()) this.logOut()
  }
  signIn() {
    if(this._router.url == "/user" && localStorage.getItem("userSession")){
      //session exist and this components loads on every page
      this._router.navigate(['user/searchFlight'])
    }else if(!localStorage.getItem("userSession")){
      //1st login
      // localStorage.setItem("userSession","manideep")
      this._router.navigate(['user/searchFlight'])
    }
    var userSession = JSON.parse(localStorage.getItem("userSession") || '{}')
    this.navBarTitleName = "Welcome " + userSession?.userName
    this.isUserLoggedIn = true
  }
  signUp() {
    this.signIn()
  }
  showSignUpCard() {
    this.showLoginCard = false
  }
  showSignInCard() {
    this.showLoginCard = true
  }
  logOut(){
    localStorage.removeItem("userSession")
    this.isUserLoggedIn = false
  }
}
