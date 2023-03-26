import { Component, OnInit } from '@angular/core';
import { SendRequest } from 'src/app/commons/request/SendRequest';
import { SupplierResult } from 'src/app/commons/result/SupplierResult';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  typeView: string = 'home';
  sendRequest!: SendRequest<SupplierResult>;

  constructor() { }

  ngOnInit(): void {
  }
  selectComponent(request: SendRequest<SupplierResult>) {
    this.sendRequest = request;
    if (this.sendRequest.api == 'add') {
      this.typeView = 'add';
    }else if (this.sendRequest.api == 'edit') {
      this.typeView = 'edit';
      this.sendRequest.data = this.sendRequest.data;
    }else if (this.sendRequest.api == 'detail') {
      this.typeView = 'detail';
      this.sendRequest.data = this.sendRequest.data;
    }else if (this.sendRequest.api == 'home') {
      this.typeView = 'home';
    }
  }
}
