import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin/admin-service.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private _service: AdminServiceService) { }

  ngOnInit(): void {
  }
  // goToHomeFrom404(){
  //   this._service.updateAdminSessionRoute()
  // }

}
