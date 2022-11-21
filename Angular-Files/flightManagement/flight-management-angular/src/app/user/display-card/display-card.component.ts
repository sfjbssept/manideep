import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as moment from 'moment';
import { faCoffee, faPlaneCircleExclamation, faPlaneCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { UserServiceService } from '../user-service.service';
@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent implements OnInit , OnChanges{

  @Input() flightDetails: any
  @Input() tripType: any
  faPlane = faPlaneCircleExclamation
  checked: boolean;
  selectedCardIndex: any;
  selectedFlightA: any;
  selectedFlightB: any;
  constructor(private _userService: UserServiceService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.checked = false
  }

  ngOnInit(): void {
  }
  getDays(flightObject: any) {
    return this._userService.getDays(flightObject)
  }
  getHours(flightObject: any) {
    return this._userService.getHours(flightObject)
  }
  getMinutes(flightObject: any) {
    return this._userService.getMinutes(flightObject)
  }
  sendToPreview(flightObject: any) {
    if (this.tripType == 'departure') {
      flightObject.tripType = this.tripType
      localStorage.setItem("selectedDepartureFlight", JSON.stringify([flightObject]))
      localStorage.removeItem("tripASelectedFlight")
      localStorage.removeItem("tripBSelectedFlight")
      window.open("http://localhost:4200/user/preview", "_blank");
    } else {
      //return

    }
  }
  cardClicked(index: any, flightObject: any) {
    flightObject.tripType = this.tripType
    this.tripType == 'tripA' ? localStorage.setItem("tripASelectedFlight", JSON.stringify(flightObject)) : localStorage.setItem("tripBSelectedFlight", JSON.stringify(flightObject))
    localStorage.removeItem("selectedDepartureFlight")
    this.selectedCardIndex = index
    this.checked = true
  }
}
