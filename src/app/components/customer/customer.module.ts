import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';
import {CustomerComponent} from "./customer.component";
import {HomeCustomerComponent} from "./home-customer/home-customer.component";
import {RouterOutlet} from "@angular/router";
import {CustomerRoutingModule} from "./customer-routing.module";
import { HeaderCustomerComponent } from './header-customer/header-customer.component';
import { FooterCustomerComponent } from './footer-customer/footer-customer.component';
import {NgIf} from "@angular/common";
import { DetailProductCustomerComponent } from './detail-product-customer/detail-product-customer.component';
import { BillCustomerComponent } from './bill-customer/bill-customer.component';
import { CartCustomerComponent } from './cart-customer/cart-customer.component';
import { ContactCustomerComponent } from './contact-customer/contact-customer.component';
import { ProductCustomerComponent } from './product-customer/product-customer.component';

@NgModule({
  declarations: [
    CustomerComponent,
    HomeCustomerComponent,
    HeaderCustomerComponent,
    FooterCustomerComponent,
    DetailProductCustomerComponent,
    BillCustomerComponent,
    CartCustomerComponent,
    ContactCustomerComponent,
    ProductCustomerComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet,
    CustomerRoutingModule,
    NgIf

  ],
  exports: [
    CustomerComponent
  ]
})
export class CustomerModule {
}
