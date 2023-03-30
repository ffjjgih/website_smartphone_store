import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SendRequest } from 'src/app/commons/request/SendRequest';
import { ProductsResponse } from 'src/app/commons/response/ProductsResponse';
import { Filter } from 'src/app/commons/result/Filter';
import { ProductResult } from 'src/app/commons/result/ProductResult';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit{
  @Output() sendData = new EventEmitter<SendRequest<ProductResult>>();
  sendRequest!: SendRequest<ProductResult>;
  filter!: Filter;
  brands!: ProductResult[];
  productsResponse!: ProductsResponse;

  constructor(private productService:ProductService) {
    this.filter = new Filter();
    
  }
  ngOnInit(): void {
    this.productService.getProducts(this.filter).subscribe(data => {
      this.productsResponse = data as ProductsResponse;
      this.brands = this.productsResponse.products;
    });
  }

  goToCreateProduct() {
    this.sendRequest = new SendRequest<ProductResult>();
    this.sendRequest.api = 'add';
    this.sendRequest.method = 'POST';
    this.sendData.emit(this.sendRequest);
  }
}
