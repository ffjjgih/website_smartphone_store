import { Component } from '@angular/core';

@Component({
  selector: 'app-order-waiting',
  templateUrl: './order-waiting.component.html',
  styleUrls: ['./order-waiting.component.css']
})
export class OrderWaitingComponent {


  goToOrderDetail(orderId:number) {}

  approveOrder(status:string, orderId:number) {

  }
}
