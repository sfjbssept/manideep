import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ride-history',
  templateUrl: './ride-history.component.html',
  styleUrls: ['./ride-history.component.css']
})
export class RideHistoryComponent implements OnInit {

  constructor() { }
  dataSource: any
  displayedColumns: any
  isReport:boolean= false
  ngOnInit(): void {
    this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
    this.dataSource = [
      { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
      { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    ];
  }
  showReports(){
    this.isReport = true
  }
  back(){
    this.isReport = false
  }

}
