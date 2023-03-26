import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SendRequest } from 'src/app/commons/request/SendRequest';
import { SupplierRequest } from 'src/app/commons/request/SupplierRequest';
import { AttachmentFileResponse } from 'src/app/commons/response/AttachmentFileResponse';
import { SupplierResult } from 'src/app/commons/result/SupplierResult';
import { FileAttachmentService } from 'src/app/services/attachment/file-attachment.service';
import { SupplierService } from 'src/app/services/supplier/supplier.service';

@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.css']
})
export class EditSupplierComponent implements OnInit{
  sendRequest!: SendRequest<SupplierResult>;
  @Output() sendData = new EventEmitter<SendRequest<SupplierResult>>();
  @Input() data!: SupplierResult;
  images= '';
  attachmentResponse!: AttachmentFileResponse;
  request!: SupplierRequest;
  constructor(private supplierService: SupplierService,
    private attachmentService: FileAttachmentService) {
    this.sendRequest = new SendRequest();
    this.request = new SupplierRequest();
  }

  ngOnInit(): void {
    
  }

  cancel() {
    this.sendRequest.api = 'home';
    this.sendRequest.method = 'GET';
    this.sendData.emit(this.sendRequest);
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
    this.supplierService.updateSupplier(this.request).subscribe(res=>{
      this.sendRequest.api = 'home';
      this.sendRequest.method = 'GET';
      this.sendData.emit(this.sendRequest);
    });
  }
}
