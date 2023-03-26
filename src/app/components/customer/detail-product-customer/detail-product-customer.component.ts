import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SendRequest} from "../../../commons/request/SendRequest";

@Component({
  selector: 'app-detail-product-customer',
  templateUrl: './detail-product-customer.component.html',
  styleUrls: ['./detail-product-customer.component.css']
})
export class DetailProductCustomerComponent implements OnInit {
  @Input() productId!: number;
  @Output() sendData = new EventEmitter<SendRequest<number>>();
  sendRequest!:SendRequest<number>;
  constructor() {
  }

  ngOnInit(): void {

  }

  buyProduct() {
    this.sendRequest = new SendRequest();
    this.sendRequest.data = this.productId;
    this.sendRequest.api = 'bill';
    this.sendRequest.method = 'GET';
    this.sendData.emit(this.sendRequest);
  }

}
