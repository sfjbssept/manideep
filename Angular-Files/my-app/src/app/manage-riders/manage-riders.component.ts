import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-riders',
  templateUrl: './manage-riders.component.html',
  styleUrls: ['./manage-riders.component.css']
})
export class ManageRidersComponent implements OnInit {
  reasonsList:any;

  constructor() { }
  displayedColumns: any = []
  dataSource: any
  isEmailBlock: boolean = false
  isBlockDiv: boolean = false
  selectedValue:any

  ngOnInit(): void {
    this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
    this.dataSource = [
      { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
      { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
      { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
      { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
      { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
      { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
      { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
      { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
      { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    ];
    this.reasonsList = [
      {name:'Bad behaviour with customer care',value:"1"},
      {name:'Damaged the bike',value:"2"},
      {name:'Not following traffic rules',value:"3"},
      {name:'Others',value:"0"},
    ]
  }
  showMailDiv(){
    this.isEmailBlock = true
    this.isBlockDiv = false
    this.selectedValue = ""
  }
  showBlockDiv(){
    this.isBlockDiv = true
    this.isEmailBlock = false
  }
  back(){
    this.isEmailBlock = false
    this.isBlockDiv = false
    this.selectedValue = ""
  }
  change(data:any){
    console.log(data.value)
    this.selectedValue = data.value
  }
}
