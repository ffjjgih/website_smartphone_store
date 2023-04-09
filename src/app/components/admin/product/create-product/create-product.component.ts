import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AddProductRequest } from 'src/app/commons/request/AddProductRequest';
import { SendRequest } from 'src/app/commons/request/SendRequest';
import { SeriesRequeset } from 'src/app/commons/request/SeriesRequest';
import { AttachmentFileResponse } from 'src/app/commons/response/AttachmentFileResponse';
import { CatalogResponse } from 'src/app/commons/response/CatalogResponse';
import { ProductConfigDetail } from 'src/app/commons/result/productConfigDetail';
import { ProductResult } from 'src/app/commons/result/ProductResult';
import { ProductVersion } from 'src/app/commons/result/productVersion';
import { SeriesResult } from 'src/app/commons/result/SeriesResult';
import { FileAttachmentService } from 'src/app/services/attachment/file-attachment.service';
import { CatalogService } from 'src/app/services/catalog/catalog.service';
import { ProductService } from 'src/app/services/product/product.service';
import { SeriesService } from 'src/app/services/series/series.service';
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
  media: string = "";
  fileIsOver: boolean = false;
  isSupplier: boolean = true;
  catalog!:CatalogResponse;
  isCreateSeries: boolean = false;
  version!:ProductVersion;
  versions: ProductVersion[] = [];
  isJack35: boolean = false;
  detail!:ProductConfigDetail;
  files: File[] = [];
  filesPreview: string[] = [];
  seriesRequest:SeriesRequeset;
  seriesResponse!:SeriesResult;
  constructor(private productService: ProductService, 
    private attachmentService: FileAttachmentService,
    private catalogService:CatalogService,
    private seriesService:SeriesService) {
    this.request = new AddProductRequest();
    this.request.status="hoạt động";
    this.response = new ProductResult();
    this.attachmentResponse = new AttachmentFileResponse();
    this.version=new ProductVersion();
    this.versions.push(this.version);
    this.detail=new ProductConfigDetail();
    this.catalog=new CatalogResponse();
    this.catalog.brands=[];
    this.catalog.series=[];
    this.catalog.suppliers=[];
    this.catalog.categories=[];
    this.request.status="hoạt động";
    this.request.categoryId=0;
    this.request.brandId=0;
    this.request.seriesId=0;
    this.request.supplierId=0;
    this.request.detail=this.detail;
    this.getCatalog();
    this.seriesRequest=new SeriesRequeset();
  }
  ngOnInit(): void {
    
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

  uploadFileMidia(event: any) {
    const file = (event.target as HTMLInputElement).files![0];
    const reader = new FileReader();
  reader.onload = () => {
    this.media ='/assets/img/word-logo.jpa';
  }
  reader.readAsDataURL(file);
    if (file) {
      this.attachmentService.uplodadFileDoc(file).subscribe(res=>{
        this.attachmentResponse = res as AttachmentFileResponse;
        this.request.midia=this.attachmentResponse.id;
      });
    }
  }

  //lấy danh sách danh mục
  getCatalog() {
      this.catalogService.getCatalog().subscribe(data => {
      this.catalog = data as CatalogResponse;
      console.log(this.catalog.suppliers);
    });
  }

  //mở đóng form tạo series
  modelSeries() {
    this.isCreateSeries = !this.isCreateSeries;
  }

  //tạo series
  createSeries() {
    this.seriesService.createSeries(this.seriesRequest).subscribe(data=>{
      this.seriesResponse=data as SeriesResult;
      this.catalog.series.push(this.seriesResponse);
      this.request.seriesId=this.seriesResponse.seriesId;
      this.modelSeries();
    });
    
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
    for (let i = 0; i < this.versions.length; i++) {
      if (i == index) {
        this.versions.splice(i, 1);
      }
    }
  }

  //thêm version
  addVersion() {
    this.versions.push(new ProductVersion());
  }

  changeJack35() {
    this.isJack35 = !this.isJack35;
  }

  createProduct(){
    this.request.versions=this.versions;
    this.productService.createProduct(this.request).subscribe(data => {
      this.response = data as ProductResult;
      this.sendRequest = new SendRequest<ProductResult>();
      this.sendRequest.data = this.response;
      this.sendRequest.api='home';
      this.sendRequest.method='Get';
      this.sendData.emit(this.sendRequest);
    });
  }

  uploadFiles(event: any) {
    this.files.push(...event.addedFiles);
    for (const file of event.addedFiles) {
      const reader = new FileReader();
      reader.onload = () => {
        if(this.filesPreview.length==0){
          this.filesPreview=[reader.result as string];
        }else{
          this.filesPreview.push(reader.result as string);
        }
      }
      reader.readAsDataURL(file);
      if (file) {
        this.attachmentService.uploadFile(file).subscribe(res=>{
          this.attachmentResponse = res as AttachmentFileResponse;
          if(this.request.images==null){
            this.request.images=[this.attachmentResponse.id];
          }else{
          this.request.images.push(this.attachmentResponse.id);
          }
        });
      }
    }
  }

  onRemove(event: any) {
    for (let i = 0; i < this.request.images.length; i++) {
      if (this.request.images[i] == event) {
        this.request.images.splice(i, 1);
        this.attachmentService.deleteFile(event).subscribe(res=>{
        });
      }
    }
  }

  selectBrandSeries(event: any) {
    this.seriesRequest.brandId = event.target.value;
  }

  //chọn danh mục
  selectCategorySeries(event: any) {
    this.seriesRequest.categoryId = event.target.value;
  }

  goToCreateBrand() {
    this.sendRequest = new SendRequest<ProductResult>();
      this.sendRequest.api='home';
      this.sendRequest.method='Get';
      this.sendRequest.description='create-brand';
      this.sendData.emit(this.sendRequest);
  }

  goToCreateCategory() {
    this.sendRequest = new SendRequest<ProductResult>();
      this.sendRequest.api='home';
      this.sendRequest.method='Get';
      this.sendRequest.description='create-category';
      this.sendData.emit(this.sendRequest);
  }

  goToCreateSupplier() {
    this.sendRequest = new SendRequest<ProductResult>();
      this.sendRequest.api='home';
      this.sendRequest.method='Get';
      this.sendRequest.description='create-supplier';
      this.sendData.emit(this.sendRequest);
  }

  goBack() {
    this.sendRequest = new SendRequest<ProductResult>();
      this.sendRequest.api='home';
      this.sendRequest.method='Get';
      this.sendRequest.description='product';
      this.sendData.emit(this.sendRequest);
  }

}