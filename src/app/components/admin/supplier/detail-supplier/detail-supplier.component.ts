import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SendRequest } from 'src/app/commons/request/SendRequest';
import { SupplierResult } from 'src/app/commons/result/SupplierResult';
import { SupplierComponent } from '../supplier.component';

@Component({
  selector: 'app-detail-supplier',
  templateUrl: './detail-supplier.component.html',
  styleUrls: ['./detail-supplier.component.css']
})
export class DetailSupplierComponent implements OnInit{
  sendRequest!: SendRequest<SupplierResult>;
  @Output() sendData = new EventEmitter<SendRequest<SupplierResult>>();
  @Input() data!: SupplierResult;
  constructor(){
    this.sendRequest = new SendRequest();
  }

  ngOnInit(): void {
    
  }

  cancel() {
    this.sendRequest.api = 'home';
    this.sendRequest.method = 'GET';
    this.sendRequest.data = this.data;
    this.sendData.emit(this.sendRequest);
  }
}
