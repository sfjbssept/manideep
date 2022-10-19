import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-manage-bikes',
  templateUrl: './manage-bikes.component.html',
  styleUrls: ['./manage-bikes.component.css']
})
export class ManageBikesComponent implements OnInit {

  constructor() { }
  displayedColumns:any
  dataSource:any
  isEdit:boolean = false
  isAdd:boolean = false
  isDelete:boolean = false
  selectedValue:any
  reasonsList:any
  ngOnInit(): void {
    this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
    this.dataSource = [
      { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
      { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    ];
    this.reasonsList = [
      {name:'Added XYZ feature',value:"1"},
      {name:'Added 123 feature',value:"2"},
      {name:'Others',value:"0"},
    ]
  }
  showAddCard(){
    this.isAdd = true
    this.isEdit = false
    this.isDelete = false
  }
  showEditCard(){
    this.isAdd = false
    this.isEdit = true
    this.isDelete = false
  }
  showDeleteCard(){
    this.isAdd = false
    this.isEdit = false
    this.isDelete = true
  }
  back(){
    this.isAdd = false
    this.isEdit = false
    this.isDelete = false
  }
  change(data:any){
    console.log(data.value)
    this.selectedValue = data.value
  }
  
}