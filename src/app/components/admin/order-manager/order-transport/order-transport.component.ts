import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { SendRequest } from 'src/app/commons/request/SendRequest';

@Component({
  selector: 'app-order-transport',
  templateUrl: './order-transport.component.html',
  styleUrls: ['./order-transport.component.css']
})
export class OrderTransportComponent implements OnInit {
  @Output() sendData = new EventEmitter<SendRequest<number>>();
  sendRequest!: SendRequest<number>;

  constructor() { }

  ngOnInit(): void {

  }
  goToOrderDetail(orderId:number) {
    console.log(orderId);
    this.sendRequest = new SendRequest();
    this.sendRequest.api = 'detail';
    this.sendRequest.method = 'GET';
    this.sendRequest.data = orderId;
    this.sendRequest.description= 'transport';
    this.sendData.emit(this.sendRequest);
  }

  approveOrder(status:string, orderId:number) {

  }
}
