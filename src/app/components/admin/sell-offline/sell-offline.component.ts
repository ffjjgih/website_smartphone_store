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
import { ProdcutSellOfflineResponse } from 'src/app/commons/response/ProdcutSellOfflineResponse';
import { ProductSellOfflineResult } from 'src/app/commons/result/ProductSellOfflineResult';

@Component({
  selector: 'app-sell-offline',
  templateUrl: './sell-offline.component.html',
  styleUrls: ['./sell-offline.component.css']
})
export class SellOfflineComponent implements OnInit {
  filter!: Filter;
  response!: SellResponse;
  request!:SellRequest;
  products!:ProdcutSellOfflineResponse;
  results:SellResult[];
  result!:SellResult;
  attachmentRessponse!:AttachmentFileResponse;
  images:string="";
  open:boolean=false;
  sumPrice:number=0;
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
    this.filter.search="";
    this.request.transfer247=true;
  }

  ngOnInit(): void {
    this.getProduct(this.filter);
  }

  getProduct(filter: Filter) {
    this.productService.getProductSellOffline(this.filter.search).subscribe(data => {
      this.products = data as ProdcutSellOfflineResponse;
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
      this.accept();
    }else if(this.request.transactionMethod=="online" && this.request.transferMethod=="money"){
      this.request.transactionStatus="đang giao hàng";
      this.accept();
    }else if(this.request.transactionMethod=="online" && this.request.transferMethod=="payment"){
      if(this.request.transfer247){
        this.request.transactionStatus="đang giao hàng";
      }else{
        this.request.transactionStatus="đang xử lý";
      }
      this.open=true;
    }else if(this.request.transactionMethod=="offline" && this.request.transferMethod=="payment"){
      this.open=true;
    }
  }

  confirm(){
    this.accept();
  }

  accept(){
    this.request.money=this.sumPrice;
    this.request.sellProducts=this.results;
    this.billService.transaction(this.request).subscribe(data => {
      this.response = data as SellResponse;
      this.open=false;
    });
  }

  addProduct(product: ProductSellOfflineResult) {
    this.changePrice();
    this.sumPrice+=product.versionResults[0].price;
    this.result=new SellResult();
    this.result.productId=product.productId;
    this.result.productVersionId=product.versionResults[0].productVersionId;
    this.result.quantity=1;
    this.result.productVersions=product.versionResults;
    this.result.maxQuantity=product.versionResults[0].quantity;
    this.result.name=product.productName;
    this.result.image=product.image;
    this.result.warehouseId=product.versionResults[0].warehouseId;
    this.result.price=product.versionResults[0].price;
    this.result.images=product.image.id;
    this.result.brand=product.brandName;
    this.results.push(this.result);
  }

  removeProduct(index:number){
    for(let i=0;i<this.results.length;i++){
      if(this.results[i].productId==this.results[index].productId){
        this.results.splice(i,1);
      }
    }
    this.changePrice();
    
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
    this.request.transportCompanyId=method.target.value;
  }

  model(){
    this.open=!this.open;
  }

  changeTypeTransfer(){
    this.request.transfer247=!this.request.transfer247;
  }

  changePrice(){
    this.sumPrice=0;
    this.results.forEach(item=>{
      this.sumPrice+=item.price*item.quantity;
    });
  }

  checkQuantity(index:number){
    if(this.results[index].quantity>this.results[index].maxQuantity){
      this.results[index].quantity=this.results[index].maxQuantity;
    }
    this.changePrice();
  }

}
