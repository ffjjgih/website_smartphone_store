import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {SendRequest} from "../../../commons/request/SendRequest";

@Component({
  selector: 'app-header-customer',
  templateUrl: './header-customer.component.html',
  styleUrls: ['./header-customer.component.css']
})
export class HeaderCustomerComponent implements OnInit {
  headerIsScrolled!: boolean;
  sendRequest!: SendRequest;
  @Output() sendData = new EventEmitter<SendRequest>();
  constructor() { }
  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.headerIsScrolled = window.pageYOffset > 50;
  }

  goToCart() {
    this.sendRequest = new SendRequest();
    this.sendRequest.api = 'cart';
    this.sendRequest.method = 'GET';
    this.sendData.emit(this.sendRequest);
  }

  goToContact() {
    this.sendRequest = new SendRequest();
    this.sendRequest.api = 'contact';
    this.sendRequest.method = 'GET';
    this.sendData.emit(this.sendRequest);
  }

  goToHome() {
    this.sendRequest = new SendRequest();
    this.sendRequest.api = 'home';
    this.sendRequest.method = 'GET';
    this.sendData.emit(this.sendRequest);
  }

  goToProduct(typeProduct: string) {
    this.sendRequest = new SendRequest();
    this.sendRequest.api = 'product';
    this.sendRequest.method = 'GET';
    this.sendRequest.description = typeProduct;
    this.sendData.emit(this.sendRequest);
  }
}
