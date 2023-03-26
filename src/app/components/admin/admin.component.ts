import {Component, OnInit, ViewChild} from '@angular/core';
import {SendRequest} from "../../commons/request/SendRequest";
import {HeaderAdminComponent} from "./header-admin/header-admin.component";

@Component({
  selector: 'admin-root',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  selectedComponent: string = 'home';
  sendData!:SendRequest<String>;
  @ViewChild('headerAdmin') headerAdmin!: HeaderAdminComponent;
  constructor() {

  }
  ngOnInit() {
  }

  selectComponent(event:SendRequest<String>) {
    this.sendData=event;
    if (this.sendData!=undefined) {
      this.selectedComponent = this.sendData.api;
    }
  }
}
