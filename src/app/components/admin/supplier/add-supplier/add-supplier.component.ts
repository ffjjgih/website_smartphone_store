import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SendRequest } from 'src/app/commons/request/SendRequest';
import { SupplierRequest } from 'src/app/commons/request/SupplierRequest';
import { AttachmentFileResponse } from 'src/app/commons/response/AttachmentFileResponse';
import { SuppliersResponse } from 'src/app/commons/response/SuppliersResponse';
import { SupplierResult } from 'src/app/commons/result/SupplierResult';
import { FileAttachmentService } from 'src/app/services/attachment/file-attachment.service';
import { SupplierService } from 'src/app/services/supplier/supplier.service';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent implements OnInit{
  sendRequest!: SendRequest<SupplierResult>;
  @Output() sendData = new EventEmitter<SendRequest<SupplierResult>>();
  attachmentResponse!:AttachmentFileResponse;
  request!:SupplierRequest;
  images!:string;
  response!:SuppliersResponse;
  today = new Date();
  todayFormatted = this.today.toISOString().slice(0, 10);
  constructor(private supplierService: SupplierService,
              private attachmentService: FileAttachmentService){
    this.sendRequest = new SendRequest();
    this.request = new SupplierRequest();
    this.request.status = 'hoạt động';
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

  create() {
    this.supplierService.createSupplier(this.request).subscribe(res=>{
      this.response = res as SuppliersResponse;
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
