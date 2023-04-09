import { Component, OnInit } from '@angular/core';
import { SellRequest } from 'src/app/commons/request/SellRequest';
import { SendRequest } from 'src/app/commons/request/SendRequest';
import { AttachmentFileResponse } from 'src/app/commons/response/AttachmentFileResponse';
import { ProductsResponse } from 'src/app/commons/response/ProductsResponse';
import { SellResponse } from 'src/app/commons/response/SellResponse';
import { Filter } from 'src/app/commons/result/Filter';
import { ProductResult } from 'src/app/commons/result/ProductResult';
import { SellResult } from 'src/app/commons/result/SellResult';
import { BillService } from 'src/app/services/Bill/bill.service';
import { FileAttachmentService } from 'src/app/services/attachment/file-attachment.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-sell-offline',
  templateUrl: './sell-offline.component.html',
  styleUrls: ['./sell-offline.component.css']
})
export class SellOfflineComponent implements OnInit {
  filter!: Filter;
  response!: SellResponse;
  request!:SellRequest;
  products!:ProductsResponse;
  results:SellResult[];
  result!:SellResult;
  attachmentRessponse!:AttachmentFileResponse;
  images:string="";
  open:boolean=false;
  constructor(private productService: ProductService,
    private billService: BillService,
    private attachmentService:FileAttachmentService) {
    this.request=new SellRequest();
    this.response=new SellResponse();
    this.filter=new Filter();
    this.results=[];
    this.request.transactionMethod="offline";
    this.request.transferMethod="money";
    this.request.typeSell="offline";
    this.request.transfer247=true;
  }

  ngOnInit(): void {
    this.getProduct(this.filter);
  }

  getProduct(filter: Filter) {
    this.productService.getProductsToSell(filter).subscribe(data => {
      this.products = data as ProductsResponse;
    });
  }

  transaction() {
    // if(this.results.length==0){
    //   alert("không có sản phẩm nào để bán");
    //   return;
    // }
    if(this.request.transferMethod==""){
      alert("vui lòng chọn phương thức thanh toán");
      return;
    }
    if(this.request.transactionMethod=="offline" && this.request.transferMethod=="money"){
      this.request.transactionStatus="hoàn thành";
      this.request.sellProducts=this.results;
      this.billService.transaction(this.request).subscribe(data => {
        this.response = data as SellResponse;
      });
    }else if(this.request.transactionMethod=="online" && this.request.transferMethod=="money"){
      this.request.transactionStatus="đang gửi cho bên vận chuyển";
      this.request.sellProducts=this.results;
      this.billService.transaction(this.request).subscribe(data => {
        this.response = data as SellResponse;
      });
    }else if(this.request.transactionMethod=="online" && this.request.transferMethod=="payment"){
      if(this.request.transfer247){
        this.request.transactionStatus="đang gửi cho bên vận chuyển";
      }else{
        this.request.transactionStatus="đang xử lý";
      }
      this.open=true;
    }else if(this.request.transactionMethod=="offline" && this.request.transferMethod=="payment"){
      this.open=true;
    }
    console.log(this.open);
  }

  confirm(){
    this.billService.transaction(this.request).subscribe(data => {
      this.response = data as SellResponse;
      this.open=false;
    });
  }

  addProduct(product: ProductResult) {
    this.result=new SellResult();
    this.result.productId=product.id;
    this.result.productVersionId=product.productVersions[0].id;
    this.result.quantity=1;
    this.result.productVersions=product.productVersions;
    this.result.name=product.name;
    this.result.price=product.productVersions[0].price;
    this.result.images=product.images;
    this.result.brand=product.brand;
    this.results.push(this.result);
  }

  changeQuantity(result:SellResult,quantity:number){
    result.quantity=quantity;
  }

  removeProduct(result:SellResult){
    this.results=this.results.filter(item=>item.productId!=result.productId);
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
        this.attachmentRessponse = res as AttachmentFileResponse;
        this.request.img=this.attachmentRessponse.id;
      });
    }
  }

  selectTransactionMethod(method:any){
    this.request.transactionMethod=method.target.value;
  }

  selectTransferMethod(method:any){
    this.request.transferMethod=method.target.value;
  }

  selectCompany(method:any){
    this.request.companyId=method.target.value;
  }

  model(){
    this.open=!this.open;
  }

  changeTypeTransfer(){
    this.request.transfer247=!this.request.transfer247;
  }

}
