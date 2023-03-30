import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SendRequest} from "../../../commons/request/SendRequest";

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {
  @Output() sendData = new EventEmitter<SendRequest<String>>();
  constructor() {
    this.sendRequest=new SendRequest();
  }
  sendRequest!: SendRequest<String>;
  ngOnInit(): void {

  }

  goToCategory() {
    this.sendRequest.api = 'category';
    this.sendRequest.method = 'GET';
    this.sendRequest.data="home";
    this.sendData.emit(this.sendRequest);
  }

  goToSupplier() {
    this.sendRequest.api = 'supplier';
    this.sendRequest.method = 'GET';
    this.sendRequest.data="home";
    this.sendData.emit(this.sendRequest);
  }

  goToBrand() {
    this.sendRequest.api = 'brand';
    this.sendRequest.method = 'GET';
    this.sendRequest.data="home";
    this.sendData.emit(this.sendRequest);
  }

  goToProduct() {
    this.sendRequest.api = 'product';
    this.sendRequest.method = 'GET';
    this.sendRequest.data="home";
    this.sendData.emit(this.sendRequest);
  }

  goHome() {
    this.sendRequest.api = 'home';
    this.sendRequest.method = 'GET';
    this.sendData.emit(this.sendRequest);
  }

  goToSell() {
    this.sendRequest.api = 'sell-offline';
    this.sendRequest.method = 'GET';
    this.sendData.emit(this.sendRequest);
  }
}
