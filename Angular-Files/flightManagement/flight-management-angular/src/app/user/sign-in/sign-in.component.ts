import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginValidation: any;

  constructor(private _userService: UserServiceService, private formBuilder: FormBuilder) { }
  @Output() loginEmitter = new EventEmitter();

  ngOnInit(): void {

    this.loginValidation = this.formBuilder.group({
      uEmail: ['', Validators.required],
      uPassword: ['', Validators.required]
    })
  }
  isValidationError(name: any) {
    return (this.loginValidation.controls[name].touched && this.loginValidation.controls[name].status == 'INVALID') ? true : false
  }
  login() {
    this.loginValidation.markAllAsTouched()
    if (this.loginValidation.status == "VALID") {
      this._userService.userLogin(this.loginValidation.value).subscribe(
        (r: any) => {
          var userSession: any = {}
          userSession.email = r.uEmail
          userSession.userName = r.uName
          localStorage.setItem("userSession", JSON.stringify(userSession))
          this.loginEmitter.emit()
          this._userService.getToasterMessage("Login Success", 'success')
        },
        r => {
          this._userService.getToasterMessage(r.error, 'warning')
        }
      )
    }
  }

}
