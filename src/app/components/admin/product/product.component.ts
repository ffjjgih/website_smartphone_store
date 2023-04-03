import { Component, OnInit } from '@angular/core';
import { SendRequest } from 'src/app/commons/request/SendRequest';
import { ProductsResponse } from 'src/app/commons/response/ProductsResponse';
import { Filter } from 'src/app/commons/result/Filter';
import { ProductResult } from 'src/app/commons/result/ProductResult';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  typeView: string = 'home';
  sendRequest!: SendRequest<ProductResult>;
  filter!: Filter;
  response!: ProductsResponse;
  constructor(private productService:ProductService) {
    this.filter = new Filter();
   }

  ngOnInit(): void {
  }

  selectComponent(request: SendRequest<ProductResult>) {
    this.sendRequest = request;
    if (this.sendRequest.api == 'add') {
      this.typeView = 'add';
    }else if (this.sendRequest.api == 'edit') {
      this.typeView = 'edit';
    }else if (this.sendRequest.api == 'detail') {
      this.typeView = 'detail';
    }else if (this.sendRequest.api == 'home') {
      this.productService.getProducts(this.filter).subscribe(data => {
        this.response = data as ProductsResponse;
      });
      this.typeView = 'home';
    }else if (this.sendRequest.api == 'import') {
      this.typeView = 'import';
    }
  }
}
