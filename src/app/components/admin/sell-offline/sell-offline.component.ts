import { Component, OnInit } from '@angular/core';
import { SellRequest } from 'src/app/commons/request/SellRequest';
import { SendRequest } from 'src/app/commons/request/SendRequest';
import { ProductsResponse } from 'src/app/commons/response/ProductsResponse';
import { SellResponse } from 'src/app/commons/response/SellResponse';
import { Filter } from 'src/app/commons/result/Filter';
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
  constructor(private productService: ProductService,
    private billService: BillService) {
    this.request=new SellRequest();
    this.response=new SellResponse();
    this.filter=new Filter();
  }

  ngOnInit(): void {
    this.getProduct(this.filter);
  }

  getProduct(filter: Filter) {
    this.productService.getProducts(filter).subscribe(data => {
      this.products = data as ProductsResponse;
    });
  }

  transaction() {
    this.billService.transaction(this.request).subscribe(data => {
      this.response = data as SellResponse;
    });
  }

}
