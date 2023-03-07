import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {SendRequest} from "../../../commons/request/SendRequest";

@Component({
  selector: 'app-home-customer',
  templateUrl: './home-customer.component.html',
  styleUrls: ['./home-customer.component.css']
})
export class HomeCustomerComponent implements OnInit {
  @Output() sendData = new EventEmitter<SendRequest<number>>();
  sendRequest!: SendRequest<number>;
  constructor(private router: Router) {
  }
  ngOnInit() {
  }

  buyProduct(productId: number) {
    this.sendRequest = new SendRequest();
    this.sendRequest.api = 'detail-product';
    this.sendRequest.method = 'GET';
    this.sendRequest.data = productId;
    this.sendData.emit(this.sendRequest);
  }
}
