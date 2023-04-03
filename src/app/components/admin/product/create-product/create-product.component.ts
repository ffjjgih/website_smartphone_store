import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AddProductRequest } from 'src/app/commons/request/AddProductRequest';
import { SendRequest } from 'src/app/commons/request/SendRequest';
import { AttachmentFileResponse } from 'src/app/commons/response/AttachmentFileResponse';
import { CatalogResponse } from 'src/app/commons/response/CatalogResponse';
import { ProductConfigDetail } from 'src/app/commons/result/productConfigDetail';
import { ProductResult } from 'src/app/commons/result/ProductResult';
import { ProductVersion } from 'src/app/commons/result/productVersion';
import { FileAttachmentService } from 'src/app/services/attachment/file-attachment.service';
import { CatalogService } from 'src/app/services/catalog/catalog.service';
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
  isSupplier: boolean = true;
  catalog!:CatalogResponse;
  isCreateSeries: boolean = false;
  version!:ProductVersion;
  versions: ProductVersion[] = [];
  isJack35: boolean = false;
  constructor(private productService: ProductService, 
    private elementRef: ElementRef, 
    private attachmentService: FileAttachmentService,
    private catalogService:CatalogService) {
    this.request = new AddProductRequest();
    this.request.status="hoạt động";
    this.response = new ProductResult();
    this.attachmentResponse = new AttachmentFileResponse();
    this.version=new ProductVersion();
    this.versions.push(this.version);
  }
  ngOnInit(): void {
    this.getCatalog();
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
  
  changeSupplier() {
    this.isSupplier = !this.isSupplier;
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
        this.request.img=this.attachmentResponse.id;
      });
    }
  }

  //lấy danh sách danh mục
  getCatalog() {
      this.catalogService.getCatalog().subscribe(data => {
      this.catalog = data as CatalogResponse;
    });
  }

  //mở đóng form tạo series
  modelSeries() {
    this.isCreateSeries = !this.isCreateSeries;
  }

  //tạo series
  createSeries() {
    this.modelSeries();
  }

  //chọn hãng sản xuất
  selectBrand(event: any) {
    this.request.brandId = event.target.value;
  }

  //chọn danh mục
  selectCategory(event: any) {
    this.request.categoryId = event.target.value;
  }

  //chọn nhà cung cấp
  selectSupplier(event: any) {
    this.request.supplierId = event.target.value;
  }

  //chọn series
  selectSeries(event: any) {
    this.request.seriesId = event.target.value;
  }

  //xóa version
  deleteVersion(index: number) {
    this.versions.splice(index, 1);
  }

  //thêm version
  addVersion() {
    this.versions.push(this.version);
  }

  changeJack35() {
    this.isJack35 = !this.isJack35;
  }

  createProduct(){
    this.productService.createProduct(this.request).subscribe(data => {
      this.response = data as ProductResult;
      this.sendRequest = new SendRequest<ProductResult>();
      this.sendRequest.data = this.response;
      this.sendData.emit(this.sendRequest);
    });
  }
}