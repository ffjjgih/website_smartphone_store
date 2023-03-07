import {Component, Input, OnInit} from '@angular/core';
import {SendRequest} from "../../../commons/request/SendRequest";

@Component({
  selector: 'app-bill-customer',
  templateUrl: './bill-customer.component.html',
  styleUrls: ['./bill-customer.component.css']
})
export class BillCustomerComponent implements OnInit {
  @Input() data!: SendRequest<number>;
  constructor() { }

  ngOnInit(): void {
  }

}
