import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {

  constructor(private _auth : UserServiceService , private _router : Router) { }
  showLoginCard: boolean = true
  isUserLoggedIn: boolean = false
  navBarTitleName: string = "Book Your Flight"
  ngOnInit(): void {
    this._auth.isSessionExist() ? this.signIn() : this.logOut()
  }
  signIn() {
    sessionStorage.setItem("userName","manideep")
    this._router.navigate(['user/searchFlight'])
    this.navBarTitleName = "Welcome " + sessionStorage.getItem("userName")
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
    sessionStorage.removeItem("userName")
    this.isUserLoggedIn = false
  }
}
