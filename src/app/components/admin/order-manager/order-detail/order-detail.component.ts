import { Component, Input, OnInit } from '@angular/core';
import { SendRequest } from 'src/app/commons/request/SendRequest';
import { DetailBillResponse } from 'src/app/commons/response/DetailBillResponse';
import { BillService } from 'src/app/services/Bill/bill.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit{
  @Input() billId!:number;
  response!:DetailBillResponse;
  constructor (private billService: BillService) { }

  ngOnInit(): void {
    console.log(this.billId);
    this.billService.getdetailBill(this.billId).subscribe(data => {
      this.response = data as DetailBillResponse;
    });
  }
}
