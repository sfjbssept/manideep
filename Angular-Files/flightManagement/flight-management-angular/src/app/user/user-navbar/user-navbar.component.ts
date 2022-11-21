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
    if(this._router.url == "/user" && localStorage.getItem("userName")){
      //session exist and this components loads on every page
      this._router.navigate(['user/searchFlight'])
    }else if(!localStorage.getItem("userName")){
      //1st login
      localStorage.setItem("userName","manideep")
      this._router.navigate(['user/searchFlight'])
    }
    this.navBarTitleName = "Welcome " + localStorage.getItem("userName")
    this.isUserLoggedIn = true
  }
  signUp() {
    alert("hii")
  }
  showSignUpCard() {
    this.showLoginCard = false
  }
  showSignInCard() {
    this.showLoginCard = true
  }
  logOut(){
    localStorage.removeItem("userName")
    this.isUserLoggedIn = false
  }
}
