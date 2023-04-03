import { Component, OnInit } from '@angular/core';
import { SellRequest } from 'src/app/commons/request/SellRequest';
import { SendRequest } from 'src/app/commons/request/SendRequest';
import { ProductsResponse } from 'src/app/commons/response/ProductsResponse';
import { SellResponse } from 'src/app/commons/response/SellResponse';
import { Filter } from 'src/app/commons/result/Filter';
import { ProductResult } from 'src/app/commons/result/ProductResult';
import { SellResult } from 'src/app/commons/result/SellResult';
import { BillService } from 'src/app/services/Bill/bill.service';
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
  constructor(private productService: ProductService,
    private billService: BillService) {
    this.request=new SellRequest();
    this.response=new SellResponse();
    this.filter=new Filter();
    this.results=[];
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
    this.request.sellProducts=this.results;
    this.billService.transaction(this.request).subscribe(data => {
      this.response = data as SellResponse;
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

}
