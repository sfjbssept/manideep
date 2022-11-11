import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent implements OnInit {

  @Input() flightDetails: any
  constructor() { }

  ngOnInit(): void {
  }
  sendToPreview(flightObject: any){
    sessionStorage.setItem("selectedFlight",JSON.stringify(flightObject))
  }
}
