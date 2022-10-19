import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-locations',
  templateUrl: './manage-locations.component.html',
  styleUrls: ['./manage-locations.component.css']
})
export class ManageLocationsComponent implements OnInit {

  constructor() { }
  dataSource: any
  displayedColumns: any
  addOrCancel: String = "Add Location"
  ngOnInit(): void {
    this.displayedColumns = ['Location', 'Available_bikes','Action'];
    this.dataSource = [
      { Location: 1, Available_bikes: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { Location: 2, Available_bikes: 'Helium', weight: 4.0026, symbol: 'He' },
      { Location: 3, Available_bikes: 'Lithium', weight: 6.941, symbol: 'Li' },
      { Location: 4, Available_bikes: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    ];
  }
  showAddLocation(){
    this.addOrCancel = this.addOrCancel == "Cancel" ? 'Add Location' : 'Cancel'
   }
   addNewLocation(){
    // adding api code
    this.showAddLocation()
   }

}
