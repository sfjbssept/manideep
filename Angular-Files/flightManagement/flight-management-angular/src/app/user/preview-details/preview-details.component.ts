import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-preview-details',
  templateUrl: './preview-details.component.html',
  styleUrls: ['./preview-details.component.css']
})
export class PreviewDetailsComponent implements OnInit, OnDestroy {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isOptional = true;
  constructor(private _userAuth: UserServiceService, public router: Router, private _formBuilder: FormBuilder, private _bottomSheet: MatBottomSheet) { }
  ngOnDestroy(): void {
    sessionStorage.removeItem("selectedFlight");
  }

  ngOnInit(): void {
    console.log(sessionStorage.getItem("selectedFlight"))
    if (!this._userAuth.isSessionExist()) {
      this.router.navigate(["/user"])
      return
    } else if (!sessionStorage.getItem("selectedFlight")) {
      //session exist but selected flight is null
      this.router.navigate(["/user/searchFlight"])
      return
    }
  }
  checkOut() {
    const bottomSheetResult = this._bottomSheet.open(BottomSheetOverviewExampleSheet);
    bottomSheetResult.afterDismissed().subscribe(
      r => {
        console.log(r)
      }
    )
  }

}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
})
export class BottomSheetOverviewExampleSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss(event);
    event.preventDefault();
  }
}
