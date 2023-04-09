import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SendRequest } from 'src/app/commons/request/SendRequest';
import { TransportCompanyResponse } from 'src/app/commons/response/TransportCompanysResponse';
import { Filter } from 'src/app/commons/result/Filter';
import { TransportCompanyResult } from 'src/app/commons/result/TransportCompanyResult';
import { TransportCompanyService } from 'src/app/services/transport/transport-company.service';

@Component({
  selector: 'app-view-transport-company',
  templateUrl: './view-transport-company.component.html',
  styleUrls: ['./view-transport-company.component.css']
})
export class ViewTransportCompanyComponent implements OnInit {
  @Output() sendData = new EventEmitter<SendRequest<TransportCompanyResult>>();
  sendRequest!: SendRequest<TransportCompanyResult>;
  transportCompanysResponse!:TransportCompanyResponse;
  response!:TransportCompanyResponse;
  filter !:Filter;
  constructor(private transportCompanyService: TransportCompanyService) {
    this.filter = new Filter();
  }

  ngOnInit(): void {
  }

  goToCreate(){
    this.sendRequest = new SendRequest<TransportCompanyResult>();
    this.sendRequest.api = 'add';
    this.sendData.emit(this.sendRequest);
  }

  goToEdit(input:TransportCompanyResult){
    this.sendRequest = new SendRequest<TransportCompanyResult>();
    this.sendRequest.api = 'edit';
    this.sendRequest.data = input;
    this.sendData.emit(this.sendRequest);
  }

  goToDetail(input:TransportCompanyResult){
    this.sendRequest = new SendRequest<TransportCompanyResult>();
    this.sendRequest.api = 'detail';
    this.sendRequest.data = input;
    this.sendData.emit(this.sendRequest);
  }

  delete(input: TransportCompanyResult) {
    const conf=confirm('Bạn có chắc chắn muốn xóa nhà cung cấp này không?');
    if(conf){
      this.transportCompanyService.deleteCompany(input.id).subscribe(res => {
        this.response = res as TransportCompanyResponse;
        if (this.response.status == 200) {
          alert(this.response.message);
          this.deleteInClient(input);
        }
      });
    }
  }

  deleteInClient(input: TransportCompanyResult) {
    for (let i = 0; i < this.transportCompanysResponse.data.length; i++) {
      if (this.transportCompanysResponse.data[i].id == input.id) {
        this.transportCompanysResponse.data.splice(i, 1);
      }
    }
  }
}
