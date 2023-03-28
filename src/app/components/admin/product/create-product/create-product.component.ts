import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AddProductRequest } from 'src/app/commons/request/AddProductRequest';
import { SendRequest } from 'src/app/commons/request/SendRequest';
import { AttachmentFileResponse } from 'src/app/commons/response/AttachmentFileResponse';
import { ProductResult } from 'src/app/commons/result/ProductResult';
import { ProductService } from 'src/app/services/product/product.service';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  sendRequest!: SendRequest<ProductResult>;
  @Output() sendData = new EventEmitter<SendRequest<ProductResult>>();
  dropzone: any;
  request!: AddProductRequest;
  response!: ProductResult;
  object!: any
  attachmentResponse!: AttachmentFileResponse;
  images: string = "";
  fileIsOver: boolean = false;
  constructor(private productService: ProductService, private elementRef: ElementRef) {
    this.request = new AddProductRequest();
    this.response = new ProductResult();
    this.attachmentResponse = new AttachmentFileResponse();
  }
  ngOnInit(): void {
  }

  onFileDrop(event: any): void {
    console.log('File dropped:', event);
  }

  dragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.fileIsOver = true;
  }
  
  dragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.fileIsOver = false;
  }

  fileOver(event: any) {
    console.log(event);
  }
  
}