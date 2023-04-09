import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SendRequest } from 'src/app/commons/request/SendRequest';
import { TransportCompanyRequest } from 'src/app/commons/request/TransportCompanyRequest';
import { AttachmentFileResponse } from 'src/app/commons/response/AttachmentFileResponse';
import { TransportCompanyResult } from 'src/app/commons/result/TransportCompanyResult';
import { FileAttachmentService } from 'src/app/services/attachment/file-attachment.service';
import { TransportCompanyService } from 'src/app/services/transport/transport-company.service';

@Component({
  selector: 'app-edit-transport-company',
  templateUrl: './edit-transport-company.component.html',
  styleUrls: ['./edit-transport-company.component.css']
})
export class EditTransportCompanyComponent implements OnInit{
  sendRequest!: SendRequest<TransportCompanyResult>;
  @Output() sendData = new EventEmitter<SendRequest<TransportCompanyResult>>();
  @Input() data!: TransportCompanyResult;
  images= '';
  attachmentResponse!: AttachmentFileResponse;
  request!: TransportCompanyRequest;
  constructor(private attachmentService: FileAttachmentService,
    private transportCompanyService: TransportCompanyService) {
    this.request = new TransportCompanyRequest();
  }
  ngOnInit(): void {
  }

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

  edit() {
    this.request.id = this.data.id;
    this.request.name = this.data.name;
    this.request.status = this.data.status;
    this.request.description = this.data.description;
    this.request.email = this.data.email;
    this.request.phone = this.data.phone;
    this.request.address = this.data.address;
    this.request.website = this.data.website;
    this.transportCompanyService.updateCompany(this.request).subscribe(res=>{
      alert('Cập nhật thành công!');
      this.sendRequest.api = 'home';
      this.sendRequest.method = 'GET';
      this.sendData.emit(this.sendRequest);
    });
  }

  cancel() {
    this.sendRequest.api = 'home';
    this.sendRequest.method = 'GET';
    this.sendData.emit(this.sendRequest);
  }
}
