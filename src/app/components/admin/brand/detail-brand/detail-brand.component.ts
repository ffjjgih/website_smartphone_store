import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SendRequest } from 'src/app/commons/request/SendRequest';
import { BrandResult } from 'src/app/commons/result/BrandResult';

@Component({
  selector: 'app-detail-brand',
  templateUrl: './detail-brand.component.html',
  styleUrls: ['./detail-brand.component.css']
})
export class DetailBrandComponent implements OnInit{
  sendRequest!: SendRequest<BrandResult>;
  @Output() sendData = new EventEmitter<SendRequest<BrandResult>>();
  @Input() data!: BrandResult;
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
