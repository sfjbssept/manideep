import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-message',
  templateUrl: './dialog-message.component.html',
  styleUrls: ['./dialog-message.component.css']
})
export class DialogMessageComponent implements OnInit {

  constructor() { }
  modalType:any
  ngOnInit(): void {
    this.modalType = 'warn'
  }

}
