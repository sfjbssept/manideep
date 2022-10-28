import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AdminServiceService } from '../admin/admin-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private _service: AdminServiceService) { }
  @Output() loginEmitter = new EventEmitter();

  ngOnInit(): void {
  }
  login(){
    this._service.setUserSession("true")
    this._service.changeSessionRoute()
    this.loginEmitter.emit()
  }

}
