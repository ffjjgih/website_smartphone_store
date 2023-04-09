import { Component, OnInit } from '@angular/core';
import { SendRequest } from 'src/app/commons/request/SendRequest';
import { TransportCompanyResult } from 'src/app/commons/result/TransportCompanyResult';

@Component({
  selector: 'app-transport-company',
  templateUrl: './transport-company.component.html',
  styleUrls: ['./transport-company.component.css']
})
export class TransportCompanyComponent implements OnInit {
  typeView: string = 'home';
  sendRequest!: SendRequest<TransportCompanyResult>;

  constructor() { }

  ngOnInit(): void {
  }
  selectComponent(request: SendRequest<TransportCompanyResult>) {
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
