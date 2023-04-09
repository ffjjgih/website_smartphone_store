import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SendRequest } from 'src/app/commons/request/SendRequest';
import { DetailTransportCompanyResponse } from 'src/app/commons/response/DetailTransportCompanyResponse';
import { TransportCompanyResult } from 'src/app/commons/result/TransportCompanyResult';
import { TransportCompanyService } from 'src/app/services/transport/transport-company.service';

@Component({
  selector: 'app-detail-transport-company',
  templateUrl: './detail-transport-company.component.html',
  styleUrls: ['./detail-transport-company.component.css']
})
export class DetailTransportCompanyComponent implements OnInit{
  sendRequest!: SendRequest<TransportCompanyResult>;
  @Output() sendData = new EventEmitter<SendRequest<TransportCompanyResult>>();
  @Input() data!: TransportCompanyResult;
  response!:DetailTransportCompanyResponse;
  constructor(private transportCompanyService: TransportCompanyService) {
    this.sendRequest = new SendRequest();
  }

  ngOnInit(): void {
    this.transportCompanyService.detailCompany(this.data.id).subscribe(res=>{
      this.response = res as DetailTransportCompanyResponse;
    });
  }

  cancel() {
    this.sendRequest.api = 'home';
    this.sendRequest.method = 'GET';
    this.sendRequest.data = this.data;
    this.sendData.emit(this.sendRequest);
  }


}
