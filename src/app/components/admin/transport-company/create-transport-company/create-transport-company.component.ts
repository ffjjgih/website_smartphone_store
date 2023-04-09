import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SendRequest } from 'src/app/commons/request/SendRequest';
import { TransportCompanyRequest } from 'src/app/commons/request/TransportCompanyRequest';
import { AttachmentFileResponse } from 'src/app/commons/response/AttachmentFileResponse';
import { TransportCompanyResponse } from 'src/app/commons/response/TransportCompanysResponse';
import { TransportCompanyResult } from 'src/app/commons/result/TransportCompanyResult';
import { FileAttachmentService } from 'src/app/services/attachment/file-attachment.service';
import { TransportCompanyService } from 'src/app/services/transport/transport-company.service';

@Component({
  selector: 'app-create-transport-company',
  templateUrl: './create-transport-company.component.html',
  styleUrls: ['./create-transport-company.component.css']
})
export class CreateTransportCompanyComponent implements OnInit{
  sendRequest!: SendRequest<TransportCompanyResult>;
  @Output() sendData = new EventEmitter<SendRequest<TransportCompanyResult>>();
  attachmentResponse!:AttachmentFileResponse;
  request!:TransportCompanyRequest;
  images!:string;
  response!:TransportCompanyResponse;

  constructor(private attachmentService: FileAttachmentService,
    private transportCompanyService: TransportCompanyService) {
    this.request = new TransportCompanyRequest();
    this.request.status = 'hoạt động';
  }

  ngOnInit(): void {}

  uploadFile(event: any) {
    const file = (event.target as HTMLInputElement).files![0];
    const reader = new FileReader();
  reader.onload = () => {
    this.images = reader.result as string;
  }
  reader.readAsDataURL(file);
    if (file) {
      this.attachmentService.uploadFile(file).subscribe(res=>{
        this.attachmentResponse = res as AttachmentFileResponse;
        this.request.fileId=this.attachmentResponse.id;
      });
    }
  }

  cancel() {
    this.sendRequest.api = 'home';
    this.sendRequest.method = 'GET';
    this.sendData.emit(this.sendRequest);
  }

  create() {
    this.transportCompanyService.createCompany(this.request).subscribe(res=>{
      this.response = res as TransportCompanyResponse;
      if (this.response.status === 200) {
        alert('Thêm mới thành công!');
        this.sendRequest.data = this.response.data[0];
        this.sendRequest.api = 'home';
      this.sendRequest.method = 'GET';
      this.sendData.emit(this.sendRequest);
      }
      
    });
  }

}
