import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {
  isUserLoggedIn: boolean = false;
  isRegister : boolean = false

  constructor(private _router: Router, private _service : AdminServiceService,private location: Location) { }

  ngOnInit(): void {
    this.isUserLoggedIn = this._service.checkUserLoggedIn()
    if(this.isUserLoggedIn && this._router.url == '/admin'){
      this.location.back()
    }else{
      // this._router.navigate(['/admin'])
    }
  }
  logOut(){
    this._service.setUserSession("false")
    this.isUserLoggedIn = this._service.checkUserLoggedIn()
    this._router.navigate(['/admin'])
  }
  login(){
    this._service.setUserSession("true")
    this._service.updateAdminSessionRoute()
    this.isUserLoggedIn = this._service.checkUserLoggedIn()
  }

}
