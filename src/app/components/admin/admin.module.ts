import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';
import {AdminComponent} from "./admin.component";
import {HomeAdminComponent} from "./home-admin/home-admin.component";
import { AddCategoryComponent } from './category/add-category/add-category.component';
import {AdminRoutingModule} from "./admin-routing.module";
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { FooterAdminComponent } from './footer-admin/footer-admin.component';
import { ViewCategoryComponent } from './category/view-category/view-category.component';
import { CategoryComponent } from './category/category/category.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { DetailCategoryComponent } from './category/detail-category/detail-category.component';
import { BrandComponent } from './brand/brand.component';
import { ViewBrandComponent } from './brand/view-brand/view-brand.component';
import { AddBrandComponent } from './brand/add-brand/add-brand.component';
import { EditBrandComponent } from './brand/edit-brand/edit-brand.component';
import { DetailBrandComponent } from './brand/detail-brand/detail-brand.component';
import { SupplierComponent } from './supplier/supplier.component';
import { ViewSupplierComponent } from './supplier/view-supplier/view-supplier.component';
import { DetailSupplierComponent } from './supplier/detail-supplier/detail-supplier.component';
import { AddSupplierComponent } from './supplier/add-supplier/add-supplier.component';
import { EditSupplierComponent } from './supplier/edit-supplier/edit-supplier.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { ViewProductComponent } from './product/view-product/view-product.component';
import { ProductComponent } from './product/product.component';
import { SellOfflineComponent } from './sell-offline/sell-offline.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { TransportCompanyComponent } from './transport-company/transport-company.component';
import { ViewTransportCompanyComponent } from './transport-company/view-transport-company/view-transport-company.component';
import { CreateTransportCompanyComponent } from './transport-company/create-transport-company/create-transport-company.component';
import { DetailTransportCompanyComponent } from './transport-company/detail-transport-company/detail-transport-company.component';
import { EditTransportCompanyComponent } from './transport-company/edit-transport-company/edit-transport-company.component';
import { OrderManagerComponent } from './order-manager/order-manager.component';
import { OrderWaitingComponent } from './order-manager/order-waiting/order-waiting.component';
import { OrderTransportComponent } from './order-manager/order-transport/order-transport.component';
import { OrderCompleteComponent } from './order-manager/order-complete/order-complete.component';
import { OrderDetailComponent } from './order-manager/order-detail/order-detail.component';
import { OrderCancelComponent } from './order-manager/order-cancel/order-cancel.component';
@NgModule({
  declarations: [
    AdminComponent,
    HomeAdminComponent,
    AddCategoryComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    ViewCategoryComponent,
    CategoryComponent,
    EditCategoryComponent,
    DetailCategoryComponent,
    BrandComponent,
    ViewBrandComponent,
    AddBrandComponent,
    EditBrandComponent,
    DetailBrandComponent,
    SupplierComponent,
    ViewSupplierComponent,
    DetailSupplierComponent,
    AddSupplierComponent,
    EditSupplierComponent,
    ProductComponent,
    CreateProductComponent,
    ViewProductComponent,
    SellOfflineComponent,
    TransportCompanyComponent,
    ViewTransportCompanyComponent,
    CreateTransportCompanyComponent,
    DetailTransportCompanyComponent,
    EditTransportCompanyComponent,
    OrderManagerComponent,
    OrderWaitingComponent,
    OrderTransportComponent,
    OrderCompleteComponent,
    OrderDetailComponent,
    OrderCancelComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    NgxDropzoneModule
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule {
}
