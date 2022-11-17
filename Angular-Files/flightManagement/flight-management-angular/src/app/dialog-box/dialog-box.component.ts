import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddFlightComponent } from '../admin/add-flight/add-flight.component';
import { HomeComponent } from '../admin/home/home.component';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {
  deleteData: any;

  constructor(public dialogRef: MatDialogRef<DialogBoxComponent>,@Inject(MAT_DIALOG_DATA) public deleteDataFromComp: HomeComponent) { }

  ngOnInit(): void {
    this.deleteData = JSON.parse(JSON.stringify(this.deleteDataFromComp))
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
