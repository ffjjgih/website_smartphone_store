import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BrandRequest } from 'src/app/commons/request/BrandRequest';
import { SendRequest } from 'src/app/commons/request/SendRequest';
import { AttachmentFileResponse } from 'src/app/commons/response/AttachmentFileResponse';
import { BrandResponse } from 'src/app/commons/response/BrandsResponse';
import { BrandResult } from 'src/app/commons/result/BrandResult';
import { FileAttachmentService } from 'src/app/services/attachment/file-attachment.service';
import { BrandService } from 'src/app/services/brand/brand.service';

@Component({
  selector: 'app-edit-brand',
  templateUrl: './edit-brand.component.html',
  styleUrls: ['./edit-brand.component.css']
})
export class EditBrandComponent implements OnInit{
  sendRequest!: SendRequest<BrandResult>;
  @Output() sendData = new EventEmitter<SendRequest<BrandResult>>();
  @Input() data!: BrandResult;
  request!:BrandRequest;
  response!:BrandResponse;
  attachmentResponse!:AttachmentFileResponse;
  images:string='';
  constructor(private brandService:BrandService,
    private attachmentService: FileAttachmentService){
    this.sendRequest = new SendRequest();
    this.request = new BrandRequest();
  }

  ngOnInit(): void {
    
  }

  cancel() {
    this.goBack();
  }

  editBrand() {
    this.request.id = this.data.id;
    this.request.name = this.data.name;
    this.request.description = this.data.description;
    this.request.status = this.data.status;
    this.request.birthOfDate = this.data.birthOfDate;
    this.request.address = this.data.address;
    this.request.email = this.data.email;
    this.request.website = this.data.website;
    this.brandService.updateBrand(this.request).subscribe(data=>{
      this.response = data as BrandResponse;
      if(this.response.status == 200) {
        this.sendRequest.api = 'home';
        this.sendRequest.method = 'GET';
        this.sendRequest.data = this.response.data[0];
        alert(this.response.message);
        this.sendData.emit(this.sendRequest);
      }
    });
  }

  goBack() {
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
}
