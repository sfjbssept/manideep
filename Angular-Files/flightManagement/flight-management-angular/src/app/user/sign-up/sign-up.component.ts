import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AdminNavbarComponent } from '../../admin/admin-navbar/admin-navbar.component';
import { AdminServiceService } from '../../admin/admin-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private _service: AdminServiceService) { }
  @Output() registerEmitter = new EventEmitter();

  ngOnInit(): void {
  }
  register() {
    //db code
    this._service.setUserSession("true")
    this._service.updateAdminSessionRoute()
    this.registerEmitter.emit()
  }

}
