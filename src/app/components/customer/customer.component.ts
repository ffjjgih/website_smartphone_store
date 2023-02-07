import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DetailProductCustomerComponent} from "./detail-product-customer/detail-product-customer.component";
import {HomeCustomerComponent} from "./home-customer/home-customer.component";
import {SendRequest} from "../../commons/request/SendRequest";
import {CartCustomerComponent} from "./cart-customer/cart-customer.component";
import {HeaderCustomerComponent} from "./header-customer/header-customer.component";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']

})
export class CustomerComponent implements OnInit {
  @ViewChild(HomeCustomerComponent) detailChild!: HomeCustomerComponent;
  @ViewChild(DetailProductCustomerComponent) detailProductChild!: DetailProductCustomerComponent;
  @ViewChild(CartCustomerComponent) cartChild!: CartCustomerComponent;
  @ViewChild(HeaderCustomerComponent) headerChild!: HeaderCustomerComponent;
  productId!: number;
  selectedComponent: string = 'home';
  sendData!:SendRequest;
  billRequest!: SendRequest;

  constructor(private route: ActivatedRoute) {
  }
  ngAfterViewInit() {
      this.detailChild.sendData.subscribe(data => {
        this.sendData = data;
        this.selectedComponent = this.sendData.api;
        if (this.sendData.api == 'detail-product') {
          this.productId = this.sendData.data;
        }
      });

  }

  ngAfterViewChecked() {
    if (this.detailProductChild != undefined) {
      this.detailProductChild.sendData.subscribe(data => {
        this.sendData = data;
        this.selectedComponent = this.sendData.api;
        console.log(this.selectedComponent);
      });
    }
    if (this.headerChild != undefined) {
      this.headerChild.sendData.subscribe(data => {
        this.sendData = data;
        this.selectedComponent = this.sendData.api;
        console.log(this.selectedComponent);
      });
    }
  }

  ngAfterHeaderChecked() {
    console.log(this.headerChild);

  }
  ngOnInit() {

  }
}
