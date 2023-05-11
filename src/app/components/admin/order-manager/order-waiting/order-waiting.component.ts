import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { SendRequest } from 'src/app/commons/request/SendRequest';
import { BillResponse } from 'src/app/commons/response/BillResponse';
import { BillService } from 'src/app/services/Bill/bill.service';
@Component({
  selector: 'app-order-waiting',
  templateUrl: './order-waiting.component.html',
  styleUrls: ['./order-waiting.component.css']
})
export class OrderWaitingComponent  implements OnInit{
  @Output() sendData = new EventEmitter<SendRequest<number>>();
  sendRequest!: SendRequest<number>;
  response!:BillResponse;
  search:string="";
  status:string="đang chờ xử lý";
  page:number=0;
  size:number=10;

  constructor(private billService: BillService) { }
  ngOnInit(): void {
    this.getBills(this.search,this.status,this.page,this.size);
  }

  changePage(page:number, size:number) {
    this.page=page;
    this.size=size;
    this.getBills(this.search,this.status,this.page,this.size);
  }

  goToOrderDetail(orderId:number) {}

  approveOrder(status:string, orderId:number) {

  }

  getBills(search:string, status:string, page:number, size:number) {
    this.billService.getBills(search,status,page,size).subscribe(data => {
      this.response = data as BillResponse;
    });
  }
}
