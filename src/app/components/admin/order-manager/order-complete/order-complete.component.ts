import { Component, EventEmitter, Output } from '@angular/core';
import { SendRequest } from 'src/app/commons/request/SendRequest';
import { BillResponse } from 'src/app/commons/response/BillResponse';
import { BillService } from 'src/app/services/Bill/bill.service';

@Component({
  selector: 'app-order-complete',
  templateUrl: './order-complete.component.html',
  styleUrls: ['./order-complete.component.css']
})
export class OrderCompleteComponent {
  @Output() sendData = new EventEmitter<SendRequest<number>>();
  sendRequest!: SendRequest<number>;
  response!:BillResponse;
  search:string="";
  status:string="hoàn thành";
  page:number=0;
  size:number=10;

  constructor(private billService: BillService) { }
  ngOnInit(): void {
    this.getBills(this.search,this.status,this.page,this.size);
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

  changePage(page:number, size:number) {
    this.page=page;
    this.size=size;
    this.getBills(this.search,this.status,this.page,this.size);
  }

  getBills(search:string, status:string, page:number, size:number) {
    this.billService.getBills(search,status,page,size).subscribe(data => {
      this.response = data as BillResponse;
    });
  }
}
