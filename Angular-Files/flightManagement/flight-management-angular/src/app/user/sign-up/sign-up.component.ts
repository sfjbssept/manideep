import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminNavbarComponent } from '../../admin/admin-navbar/admin-navbar.component';
import { AdminServiceService } from '../../admin/admin-service.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  registerValidation: any;

  constructor(private _userService: UserServiceService, private formBuilder: FormBuilder) { }
  @Output() registerEmitter = new EventEmitter();

  ngOnInit(): void {
    this.registerValidation = this.formBuilder.group({
      uName: ['', Validators.required],
      uEmail: ['', Validators.required],
      uMobileNumber: ['', Validators.required],
      uPassword: ['', Validators.required]
    })
  }
  isValidationError(name: any) {
    return (this.registerValidation.controls[name].touched && this.registerValidation.controls[name].status == 'INVALID') ? true : false
  }
  register() {
    //db code
    // this._service.setUserSession("true")
    // this._service.updateAdminSessionRoute()
    this.registerValidation.markAllAsTouched()
    if (this.registerValidation.status == "VALID") {
      this._userService.userRegistration(this.registerValidation.value).subscribe(
        (r: any) => {
          console.log(r)
          this.registerEmitter.emit()
          this._userService.getToasterMessage(r.text,'success')
        }
        ,
        r => {
          if (r.status == '200') {
            //success
            var userSession:any = {}
            userSession.email = this.registerValidation.value.uEmail
            userSession.userName = this.registerValidation.value.uName
            localStorage.setItem("userSession", JSON.stringify(userSession))
            this.registerEmitter.emit()
            this._userService.getToasterMessage(r.error.text,'success')
          } else {
            //fail
            this._userService.getToasterMessage(r.error,'warning')
          }
        }
      )
    }
  }

}
